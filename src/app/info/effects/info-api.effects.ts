import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { InfoRepository } from "src/app/api/info/info.repository";
import { UserActions, UserApiActions } from "../state";
import { catchError, debounceTime, map, mergeMap } from "rxjs/operators";
import { HOBBIES_FROM_GROUP, MAIN_INFO_FROM_GROUP } from "../user/models/user";
import { Gender } from "src/app/api/info/models/user/gender";
import { HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";

@Injectable()
export class InfoApiEffects {
  public infoUpdate$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.infoChange),
    debounceTime(1000),
    mergeMap((info) => this.infoRepository.update({
      gender: info[MAIN_INFO_FROM_GROUP]?.gender as Gender,
      hobbies: info[HOBBIES_FROM_GROUP] as string[],
      name: info[MAIN_INFO_FROM_GROUP]?.name,
      surname: info[MAIN_INFO_FROM_GROUP]?.surname,
    }).pipe(
      map(() => UserApiActions.updateInfoSuccess()),
      catchError((err: HttpErrorResponse) => of(UserApiActions.updateInfoError({ error: err.message }))),
    )),
  ))

  public infoLoad$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.infoLoad),
    mergeMap(() => this.infoRepository.get().pipe(
      map((info) => UserApiActions.loadInfoSuccess({
        gender: info.gender,
        hobbies: info.hobbies,
        name: info.name,
        surname: info.surname,
      })),
      catchError((err: HttpErrorResponse) => of(UserApiActions.loadInfoError({ error: err.message }))),
    )),
  ))

  public constructor(
    private actions$: Actions,
    private infoRepository: InfoRepository,
  ) {}
}