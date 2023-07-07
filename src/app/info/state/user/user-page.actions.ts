import { createAction, props } from "@ngrx/store";
import { MainInfo } from "../../user/models/main-info";
import { Hobbies } from "../../user/models/hobbies";
import { FormUserModel } from "../../user/models/user";

export const mainInfoChange = createAction('[User Page] Main Info Change', props<{ mainInfo: MainInfo }>());

export const additionalInfoChange = createAction('[User Page] Hobbies Change', props<{ hobbies: Hobbies }>());

export const infoChange = createAction('[User Page] Info Change', props<DeepPartial<FormUserModel>>());

export const infoLoad = createAction('[User Page] Load Info');