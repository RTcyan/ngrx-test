import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Gender } from "../models/gender";
import { fromForm } from "./form-mappers";

export const MAIN_INFO_FROM_GROUP = 'user'
export const HOBBIES_FROM_GROUP = 'hobbies'

export type FormUserModel = {
  [MAIN_INFO_FROM_GROUP]: {
    name: string,
    surname: string,
    gender: Gender,
  },
  [HOBBIES_FROM_GROUP]: string[],
}

@Injectable()
export class FormService {
  public form = new FormGroup({
    [MAIN_INFO_FROM_GROUP]: new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      gender: new FormControl(),
    }),
    [HOBBIES_FROM_GROUP]: new FormArray([]),
  });

  public constructor() {
    this.form.valueChanges.subscribe(console.log);
  }
}