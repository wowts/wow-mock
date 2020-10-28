import { QueueSpecificInfo } from '../mixins';
import { UIFrame } from "../ui";
export interface SocialQueueConfig {
    TOASTS_DISABLED: boolean;
    TOAST_DURATION: number;
    DELAY_DURATION: number;
    QUEUE_MULTIPLIER: number;
    PLAYER_MULTIPLIER: number;
    PLAYER_FRIEND_VALUE: number;
    PLAYER_GUILD_VALUE: number;
    THROTTLE_INITIAL_THRESHOLD: number;
    THROTTLE_DECAY_TIME: number;
    THROTTLE_PRIORITY_SPIKE: number;
    THROTTLE_MIN_THRESHOLD: number;
    THROTTLE_PVP_PRIORITY_NORMAL: number;
    THROTTLE_PVP_PRIORITY_LOW: number;
    THROTTLE_PVP_HONOR_THRESHOLD: number;
    THROTTLE_LFGLIST_PRIORITY_DEFAULT: number;
    THROTTLE_LFGLIST_PRIORITY_ABOVE: number;
    THROTTLE_LFGLIST_PRIORITY_BELOW: number;
    THROTTLE_LFGLIST_ILVL_SCALING_ABOVE: number;
    THROTTLE_LFGLIST_ILVL_SCALING_BELOW: number;
    THROTTLE_RF_PRIORITY_ABOVE: number;
    THROTTLE_RF_ILVL_SCALING_ABOVE: number;
    THROTTLE_DF_MAX_ITEM_LEVEL: number;
    THROTTLE_DF_BEST_PRIORITY: number
}
export interface SocialQueueGroupQueueInfo {
    clientID: number;
    eligible: boolean;
    needTank: boolean;
    needHealer: boolean;
    needDamage: boolean;
    isAutoAccept: boolean;
    queueData: QueueSpecificInfo
}
export interface SocialQueuePlayerInfo {
    guid: string;
    clubId: string | undefined
}
export const C_SocialQueue = {
    GetAllGroups: (allowNonJoinable: boolean, allowNonQueuedGroups: boolean): any => {return {} as any},
    GetConfig: (): SocialQueueConfig => {return {TOASTS_DISABLED: false, TOAST_DURATION: 0, DELAY_DURATION: 0, QUEUE_MULTIPLIER: 0, PLAYER_MULTIPLIER: 0, PLAYER_FRIEND_VALUE: 0, PLAYER_GUILD_VALUE: 0, THROTTLE_INITIAL_THRESHOLD: 0, THROTTLE_DECAY_TIME: 0, THROTTLE_PRIORITY_SPIKE: 0, THROTTLE_MIN_THRESHOLD: 0, THROTTLE_PVP_PRIORITY_NORMAL: 0, THROTTLE_PVP_PRIORITY_LOW: 0, THROTTLE_PVP_HONOR_THRESHOLD: 0, THROTTLE_LFGLIST_PRIORITY_DEFAULT: 0, THROTTLE_LFGLIST_PRIORITY_ABOVE: 0, THROTTLE_LFGLIST_PRIORITY_BELOW: 0, THROTTLE_LFGLIST_ILVL_SCALING_ABOVE: 0, THROTTLE_LFGLIST_ILVL_SCALING_BELOW: 0, THROTTLE_RF_PRIORITY_ABOVE: 0, THROTTLE_RF_ILVL_SCALING_ABOVE: 0, THROTTLE_DF_MAX_ITEM_LEVEL: 0, THROTTLE_DF_BEST_PRIORITY: 0}},
    GetGroupForPlayer: (playerGUID: string): [groupGUID: string, isSoloQueueParty: boolean] => {return ['', false]},
    GetGroupInfo: (groupGUID: string): [canJoin: boolean, numQueues: number, needTank: boolean, needHealer: boolean, needDamage: boolean, isSoloQueueParty: boolean, questSessionActive: boolean, leaderGUID: string] => {return [false, 0, false, false, false, false, false, '']},
    GetGroupMembers: (groupGUID: string): any => {return {} as any},
    GetGroupQueues: (groupGUID: string): any => {return {} as any},
    RequestToJoin: (groupGUID: string, applyAsTank: boolean, applyAsHealer: boolean, applyAsDamage: boolean): boolean => {return false},
    SignalToastDisplayed: (groupGUID: string, priority: number): void => {},
};
export type SocialQueueConfigUpdatedEvent = (frame: UIFrame, e: "SOCIAL_QUEUE_CONFIG_UPDATED") => void
export type SocialQueueUpdateEvent = (frame: UIFrame, e: "SOCIAL_QUEUE_UPDATE", groupGUID: string, numAddedItems: number | undefined) => void