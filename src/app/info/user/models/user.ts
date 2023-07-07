import { Hobbies } from "./hobbies"
import { MainInfo } from "./main-info"

export const MAIN_INFO_FROM_GROUP = 'user';
export const HOBBIES_FROM_GROUP = 'hobbies';

export type FormUserModel = {
  [MAIN_INFO_FROM_GROUP]: MainInfo,
  [HOBBIES_FROM_GROUP]: Hobbies,
}