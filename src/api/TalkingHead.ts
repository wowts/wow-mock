import { UIFrame } from "../ui";

export const C_TalkingHead = {

};
export type TalkingheadCloseEvent = (frame: UIFrame, e: "TALKINGHEAD_CLOSE") => void
export type TalkingheadRequestedEvent = (frame: UIFrame, e: "TALKINGHEAD_REQUESTED") => void