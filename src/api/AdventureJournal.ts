import { UIFrame } from "../ui";

export const C_AdventureJournal = {};
export type AjDungeonActionEvent = (
    frame: UIFrame,
    e: "AJ_DUNGEON_ACTION",
    lfgDungeonID: number
) => void;
export type AjOpenEvent = (frame: UIFrame, e: "AJ_OPEN") => void;
export type AjPveLfgActionEvent = (
    frame: UIFrame,
    e: "AJ_PVE_LFG_ACTION"
) => void;
export type AjPvpActionEvent = (
    frame: UIFrame,
    e: "AJ_PVP_ACTION",
    battleMasterListID: number
) => void;
export type AjPvpLfgActionEvent = (
    frame: UIFrame,
    e: "AJ_PVP_LFG_ACTION"
) => void;
export type AjPvpRbgActionEvent = (
    frame: UIFrame,
    e: "AJ_PVP_RBG_ACTION"
) => void;
export type AjPvpSkirmishActionEvent = (
    frame: UIFrame,
    e: "AJ_PVP_SKIRMISH_ACTION"
) => void;
export type AjQuestLogOpenEvent = (
    frame: UIFrame,
    e: "AJ_QUEST_LOG_OPEN",
    questID: number,
    uiMapID: number
) => void;
export type AjRaidActionEvent = (
    frame: UIFrame,
    e: "AJ_RAID_ACTION",
    lfgDungeonID: number
) => void;
export type AjRefreshDisplayEvent = (
    frame: UIFrame,
    e: "AJ_REFRESH_DISPLAY",
    newAdventureNotice: boolean
) => void;
export type AjRewardDataReceivedEvent = (
    frame: UIFrame,
    e: "AJ_REWARD_DATA_RECEIVED"
) => void;
