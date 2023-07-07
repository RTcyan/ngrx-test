import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserActions } from "./state";
import { infoSelector } from "./state/selectors";
import { first, tap } from "rxjs/operators";

@Injectable()
export class InfoResolver implements Resolve<unknown> {
  public constructor(private store: Store) {}

  public resolve(): Observable<unknown> {
    this.store.dispatch(UserActions.infoLoad());
    return this.store.select(infoSelector).pipe(
      first(),
      tap(console.log),
    )
  }
  
}