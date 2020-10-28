import { UIFrame } from "../ui";

export const C_AdventureMap = {

};
export type AdventureMapCloseEvent = (frame: UIFrame, e: "ADVENTURE_MAP_CLOSE") => void
export type AdventureMapOpenEvent = (frame: UIFrame, e: "ADVENTURE_MAP_OPEN", followerTypeID: number) => void
export type AdventureMapQuestUpdateEvent = (frame: UIFrame, e: "ADVENTURE_MAP_QUEST_UPDATE", questID: number) => void
export type AdventureMapUpdateInsetsEvent = (frame: UIFrame, e: "ADVENTURE_MAP_UPDATE_INSETS") => void
export type AdventureMapUpdatePoisEvent = (frame: UIFrame, e: "ADVENTURE_MAP_UPDATE_POIS") => void