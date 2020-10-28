import { UIFrame } from "../ui";

export const C_Cinematic = {

};
export type CinematicStartEvent = (frame: UIFrame, e: "CINEMATIC_START", canBeCancelled: boolean) => void
export type CinematicStopEvent = (frame: UIFrame, e: "CINEMATIC_STOP") => void
export type HideSubtitleEvent = (frame: UIFrame, e: "HIDE_SUBTITLE") => void
export type PlayMovieEvent = (frame: UIFrame, e: "PLAY_MOVIE", movieID: number) => void