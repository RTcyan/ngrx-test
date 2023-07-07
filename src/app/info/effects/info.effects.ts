import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { InfoState, UserActions } from "../state";
import { exhaustMap, first, map, tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { infoSelector } from "../state/selectors";

@Injectable()
export class InfoEffects {
  public infoChange$ = createEffect(() => this.actions$.pipe(
    ofType(
      UserActions.additionalInfoChange,
      UserActions.mainInfoChange,
    ),
    exhaustMap(() => this.store.select(infoSelector).pipe(
      first(),
      map((info: InfoState) => UserActions.infoChange({
        hobbies: info.user?.hobbies,
        user: {
          gender: info.user?.gender,
          name: info.user?.name,
          surname: info.user?.surname,
        }
      }))
    )),
  ));

  public constructor(
    private actions$: Actions,
    private store: Store,
  ) {}
}