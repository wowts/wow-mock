import { UIFrame } from "../ui";

export const C_EncounterInfo = {};
export type BossKillEvent = (
    frame: UIFrame,
    e: "BOSS_KILL",
    encounterID: number,
    encounterName: string
) => void;
export type DisableLowLevelRaidEvent = (
    frame: UIFrame,
    e: "DISABLE_LOW_LEVEL_RAID"
) => void;
export type EnableLowLevelRaidEvent = (
    frame: UIFrame,
    e: "ENABLE_LOW_LEVEL_RAID"
) => void;
export type EncounterEndEvent = (
    frame: UIFrame,
    e: "ENCOUNTER_END",
    encounterID: number,
    encounterName: string,
    difficultyID: number,
    groupSize: number,
    success: number
) => void;
export type EncounterStartEvent = (
    frame: UIFrame,
    e: "ENCOUNTER_START",
    encounterID: number,
    encounterName: string,
    difficultyID: number,
    groupSize: number
) => void;
export type InstanceLockStartEvent = (
    frame: UIFrame,
    e: "INSTANCE_LOCK_START"
) => void;
export type InstanceLockStopEvent = (
    frame: UIFrame,
    e: "INSTANCE_LOCK_STOP"
) => void;
export type InstanceLockWarningEvent = (
    frame: UIFrame,
    e: "INSTANCE_LOCK_WARNING"
) => void;
export type RaidTargetUpdateEvent = (
    frame: UIFrame,
    e: "RAID_TARGET_UPDATE"
) => void;
export type UpdateInstanceInfoEvent = (
    frame: UIFrame,
    e: "UPDATE_INSTANCE_INFO"
) => void;
