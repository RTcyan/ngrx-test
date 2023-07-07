import { createReducer, on } from "@ngrx/store";
import { User } from "../../api/info/models/user/user";
import { UserActions, UserApiActions } from ".";

export const infoFeatureKey = 'info';

export interface InfoState {
  user: Partial<User> | null;
}

export const initialState: InfoState = {
  user: null,
};

export const infoReducer = createReducer(
  initialState,
  on(UserActions.mainInfoChange, (state, { mainInfo }) => ({ user: {
    gender: mainInfo.gender,
    name: mainInfo.name,
    surname: mainInfo.surname,
    hobbies: state.user?.hobbies,
  }})),
  on(UserActions.additionalInfoChange, (state, { hobbies }) => ({ user: {
    ...(state.user || {}),
    hobbies,
  }})),
  on(UserApiActions.loadInfoSuccess, (state, info) => ({ user: {
    gender: info.gender,
    hobbies: info.hobbies,
    name: info.name,
    surname: info.surname,
  }}))
)