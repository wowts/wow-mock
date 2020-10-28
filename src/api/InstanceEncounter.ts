import { UIFrame } from "../ui";

export const C_InstanceEncounter = {

};
export type InstanceEncounterAddTimerEvent = (frame: UIFrame, e: "INSTANCE_ENCOUNTER_ADD_TIMER", timeRemaining: number) => void
export type InstanceEncounterEngageUnitEvent = (frame: UIFrame, e: "INSTANCE_ENCOUNTER_ENGAGE_UNIT") => void
export type InstanceEncounterObjectiveCompleteEvent = (frame: UIFrame, e: "INSTANCE_ENCOUNTER_OBJECTIVE_COMPLETE", objectiveID: number) => void
export type InstanceEncounterObjectiveStartEvent = (frame: UIFrame, e: "INSTANCE_ENCOUNTER_OBJECTIVE_START", objectiveID: number, objectiveProgress: number) => void
export type InstanceEncounterObjectiveUpdateEvent = (frame: UIFrame, e: "INSTANCE_ENCOUNTER_OBJECTIVE_UPDATE", objectiveID: number, objectiveProgress: number) => void