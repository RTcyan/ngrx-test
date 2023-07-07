import { createFeatureSelector } from "@ngrx/store";
import { InfoState, infoFeatureKey } from ".";

export const infoSelector = createFeatureSelector<InfoState>(infoFeatureKey);