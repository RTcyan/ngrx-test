import { createSelector } from "@ngrx/store";
import { infoSelector } from "../selectors";
import { MainInfo } from "../../user/models/main-info";
import { User } from "src/app/api/info/models/user/user";
import { Hobbies } from "../../user/models/hobbies";

export const userSelector = createSelector(
  infoSelector,
  (state) => state.user,
);

export const mainInfoSelector = createSelector(
  userSelector,
  (it) => ({
    gender: it?.gender,
    name: it?.name,
    surname: it?.surname,
  } as MainInfo),
)

export const additionalInfoSelector = createSelector(
  userSelector,
  (it) => (it?.hobbies as Hobbies),
)