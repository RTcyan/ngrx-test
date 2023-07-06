import { Gender } from "./gender"

export type User = {
  name: string,
  surname: string,
  gender: Gender,
  hobbies: string[],
}