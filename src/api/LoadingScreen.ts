import { UIFrame } from "../ui";

export const C_LoadingScreen = {

};
export type LoadingScreenDisabledEvent = (frame: UIFrame, e: "LOADING_SCREEN_DISABLED") => void
export type LoadingScreenEnabledEvent = (frame: UIFrame, e: "LOADING_SCREEN_ENABLED") => void