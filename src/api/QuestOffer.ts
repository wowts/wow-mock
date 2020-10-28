import { UIFrame } from "../ui";

export const C_QuestOffer = {

};
export type QuestAcceptConfirmEvent = (frame: UIFrame, e: "QUEST_ACCEPT_CONFIRM", name: string, questTitle: string) => void
export type QuestFinishedEvent = (frame: UIFrame, e: "QUEST_FINISHED") => void
export type QuestGreetingEvent = (frame: UIFrame, e: "QUEST_GREETING") => void
export type QuestItemUpdateEvent = (frame: UIFrame, e: "QUEST_ITEM_UPDATE") => void
export type QuestProgressEvent = (frame: UIFrame, e: "QUEST_PROGRESS") => void