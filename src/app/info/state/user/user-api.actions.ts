import { createAction, props } from "@ngrx/store";
import { User } from "src/app/api/info/models/user/user";

export const loadInfoSuccess = createAction('[User API] Load Info Success', props<Partial<User>>());

export const loadInfoError = createAction('[User API] Load Info Error', props<{ error: string }>());

export const updateInfoSuccess = createAction('[User API] Update Info Success');

export const updateInfoError = createAction('[User API] Update Info Error', props<{ error: string }>());