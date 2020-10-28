import { UIFrame } from "../ui";

export const C_CombatLog = {

};
export type CombatLogEventEvent = (frame: UIFrame, e: "COMBAT_LOG_EVENT") => void
export type CombatLogEventUnfilteredEvent = (frame: UIFrame, e: "COMBAT_LOG_EVENT_UNFILTERED") => void
export type CombatTextUpdateEvent = (frame: UIFrame, e: "COMBAT_TEXT_UPDATE", combatTextType: string) => void