import { UIFrame } from "../ui";

export const C_DuelInfo = {

};
export type DuelFinishedEvent = (frame: UIFrame, e: "DUEL_FINISHED") => void
export type DuelInboundsEvent = (frame: UIFrame, e: "DUEL_INBOUNDS") => void
export type DuelOutofboundsEvent = (frame: UIFrame, e: "DUEL_OUTOFBOUNDS") => void
export type DuelRequestedEvent = (frame: UIFrame, e: "DUEL_REQUESTED", playerName: string) => void