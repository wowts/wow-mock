import { UIFrame } from "../ui";

export const C_ItemText = {

};
export type ItemTextBeginEvent = (frame: UIFrame, e: "ITEM_TEXT_BEGIN") => void
export type ItemTextClosedEvent = (frame: UIFrame, e: "ITEM_TEXT_CLOSED") => void
export type ItemTextReadyEvent = (frame: UIFrame, e: "ITEM_TEXT_READY") => void
export type ItemTextTranslationEvent = (frame: UIFrame, e: "ITEM_TEXT_TRANSLATION", delay: number) => void