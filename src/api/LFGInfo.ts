import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface LFGLockInfo {
    lfgID: number;
    reason: number;
    hideEntry: boolean;
}
export const C_LFGInfo = {
    CanPlayerUseGroupFinder: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUseLFD: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUseLFR: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUsePVP: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUsePremadeGroup: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    ConfirmLfgExpandSearch: (): void => {},
    GetAllEntriesForCategory: (category: number): LuaArray<number> => {
        return {} as any;
    },
    GetLFDLockStates: (): LuaArray<LFGLockInfo> => {
        return {} as any;
    },
    GetRoleCheckDifficultyDetails: (): [
        maxLevel: number | undefined,
        isLevelReduced: boolean
    ] => {
        return [0, false];
    },
    HideNameFromUI: (dungeonID: number): boolean => {
        return false;
    },
};
export type IslandCompletedEvent = (
    frame: UIFrame,
    e: "ISLAND_COMPLETED",
    mapID: number,
    winner: number
) => void;
export type LfgBootProposalUpdateEvent = (
    frame: UIFrame,
    e: "LFG_BOOT_PROPOSAL_UPDATE"
) => void;
export type LfgCompletionRewardEvent = (
    frame: UIFrame,
    e: "LFG_COMPLETION_REWARD"
) => void;
export type LfgInvalidErrorMessageEvent = (
    frame: UIFrame,
    e: "LFG_INVALID_ERROR_MESSAGE",
    reason: number,
    subReason1: number,
    subReason2: number
) => void;
export type LfgLockInfoReceivedEvent = (
    frame: UIFrame,
    e: "LFG_LOCK_INFO_RECEIVED"
) => void;
export type LfgOfferContinueEvent = (
    frame: UIFrame,
    e: "LFG_OFFER_CONTINUE",
    name: string,
    lfgDungeonsID: number,
    typeID: number
) => void;
export type LfgOpenFromGossipEvent = (
    frame: UIFrame,
    e: "LFG_OPEN_FROM_GOSSIP",
    dungeonID: number
) => void;
export type LfgProposalDoneEvent = (
    frame: UIFrame,
    e: "LFG_PROPOSAL_DONE"
) => void;
export type LfgProposalFailedEvent = (
    frame: UIFrame,
    e: "LFG_PROPOSAL_FAILED"
) => void;
export type LfgProposalShowEvent = (
    frame: UIFrame,
    e: "LFG_PROPOSAL_SHOW"
) => void;
export type LfgProposalSucceededEvent = (
    frame: UIFrame,
    e: "LFG_PROPOSAL_SUCCEEDED"
) => void;
export type LfgProposalUpdateEvent = (
    frame: UIFrame,
    e: "LFG_PROPOSAL_UPDATE"
) => void;
export type LfgQueueStatusUpdateEvent = (
    frame: UIFrame,
    e: "LFG_QUEUE_STATUS_UPDATE"
) => void;
export type LfgReadyCheckDeclinedEvent = (
    frame: UIFrame,
    e: "LFG_READY_CHECK_DECLINED",
    name: string
) => void;
export type LfgReadyCheckHideEvent = (
    frame: UIFrame,
    e: "LFG_READY_CHECK_HIDE"
) => void;
export type LfgReadyCheckPlayerIsReadyEvent = (
    frame: UIFrame,
    e: "LFG_READY_CHECK_PLAYER_IS_READY",
    name: string
) => void;
export type LfgReadyCheckShowEvent = (
    frame: UIFrame,
    e: "LFG_READY_CHECK_SHOW",
    isRequeue: boolean
) => void;
export type LfgReadyCheckUpdateEvent = (
    frame: UIFrame,
    e: "LFG_READY_CHECK_UPDATE"
) => void;
export type LfgRoleCheckDeclinedEvent = (
    frame: UIFrame,
    e: "LFG_ROLE_CHECK_DECLINED"
) => void;
export type LfgRoleCheckHideEvent = (
    frame: UIFrame,
    e: "LFG_ROLE_CHECK_HIDE"
) => void;
export type LfgRoleCheckRoleChosenEvent = (
    frame: UIFrame,
    e: "LFG_ROLE_CHECK_ROLE_CHOSEN",
    name: string,
    isTank: boolean,
    isHealer: boolean,
    isDamage: boolean
) => void;
export type LfgRoleCheckShowEvent = (
    frame: UIFrame,
    e: "LFG_ROLE_CHECK_SHOW",
    isRequeue: boolean
) => void;
export type LfgRoleCheckUpdateEvent = (
    frame: UIFrame,
    e: "LFG_ROLE_CHECK_UPDATE"
) => void;
export type LfgRoleUpdateEvent = (frame: UIFrame, e: "LFG_ROLE_UPDATE") => void;
export type LfgUpdateEvent = (frame: UIFrame, e: "LFG_UPDATE") => void;
export type LfgUpdateRandomInfoEvent = (
    frame: UIFrame,
    e: "LFG_UPDATE_RANDOM_INFO"
) => void;
export type ShowLfgExpandSearchPromptEvent = (
    frame: UIFrame,
    e: "SHOW_LFG_EXPAND_SEARCH_PROMPT"
) => void;
export type UpdateLfgListEvent = (frame: UIFrame, e: "UPDATE_LFG_LIST") => void;
export type WarfrontCompletedEvent = (
    frame: UIFrame,
    e: "WARFRONT_COMPLETED",
    mapID: number,
    winner: number
) => void;
