import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { User } from "../models/user";
import { FormUserModel, HOBBIES_FROM_GROUP, MAIN_INFO_FROM_GROUP } from "./form.service";

export function toForm(source: Observable<User>): Observable<FormUserModel> {
  return source.pipe(
    map((user) => ({
      [HOBBIES_FROM_GROUP]: user.hobbies,
      [MAIN_INFO_FROM_GROUP]: {
        gender: user.gender,
        name: user.name,
        surname: user.surname,
      }
    } as FormUserModel))
  )
}

export function fromForm(source: Observable<FormUserModel>): Observable<User> {
  return source.pipe(
    map((formUser) => ({
      hobbies: formUser[HOBBIES_FROM_GROUP],
      gender: formUser[MAIN_INFO_FROM_GROUP].gender,
      name: formUser[MAIN_INFO_FROM_GROUP].name,
      surname: formUser[MAIN_INFO_FROM_GROUP].surname,
    } as User))
  )
}