import { QueueSpecificInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum PartyRequestJoinRelation {
    None = 0,
    Friend = 1,
    Guild = 2,
    Club = 3,
    NumPartyRequestJoinRelations = 4,
}
export const C_PartyInfo = {
    AllowedToDoPartyConversion: (toRaid: boolean): boolean => {
        return false;
    },
    CanInvite: (): boolean => {
        return false;
    },
    ConfirmConvertToRaid: (): void => {},
    ConfirmInviteTravelPass: (
        targetName: string,
        targetGUID: string
    ): void => {},
    ConfirmInviteUnit: (targetName: string): void => {},
    ConfirmLeaveParty: (category: number | undefined): void => {},
    ConfirmRequestInviteFromUnit: (
        targetName: string,
        tank: boolean | undefined,
        healer: boolean | undefined,
        dps: boolean | undefined
    ): void => {},
    ConvertToParty: (): void => {},
    ConvertToRaid: (): void => {},
    DoCountdown: (seconds: number): void => {},
    GetActiveCategories: (): LuaArray<number> => {
        return {} as any;
    },
    GetInviteConfirmationInvalidQueues: (
        inviteGUID: string
    ): LuaArray<QueueSpecificInfo> => {
        return {} as any;
    },
    GetInviteReferralInfo: (
        inviteGUID: string
    ): [
        outReferredByGuid: string,
        outReferredByName: string,
        outRelationType: PartyRequestJoinRelation,
        outIsQuickJoin: boolean,
        outClubId: string
    ] => {
        return ["", "", PartyRequestJoinRelation.None, false, ""];
    },
    GetMinLevel: (category: number | undefined): number => {
        return 0;
    },
    InviteUnit: (targetName: string): void => {},
    IsPartyFull: (category: number | undefined): boolean => {
        return false;
    },
    IsPartyInJailersTower: (): boolean => {
        return false;
    },
    LeaveParty: (category: number | undefined): void => {},
    RequestInviteFromUnit: (
        targetName: string,
        tank: boolean | undefined,
        healer: boolean | undefined,
        dps: boolean | undefined
    ): void => {},
};
export type BnetRequestInviteConfirmationEvent = (
    frame: UIFrame,
    e: "BNET_REQUEST_INVITE_CONFIRMATION",
    gameAccountID: number,
    questSessionActive: boolean,
    tank: boolean,
    healer: boolean,
    dps: boolean
) => void;
export type ConvertToRaidConfirmationEvent = (
    frame: UIFrame,
    e: "CONVERT_TO_RAID_CONFIRMATION"
) => void;
export type EnteredDifferentInstanceFromPartyEvent = (
    frame: UIFrame,
    e: "ENTERED_DIFFERENT_INSTANCE_FROM_PARTY"
) => void;
export type GroupFormedEvent = (
    frame: UIFrame,
    e: "GROUP_FORMED",
    category: number,
    partyGUID: string
) => void;
export type GroupInviteConfirmationEvent = (
    frame: UIFrame,
    e: "GROUP_INVITE_CONFIRMATION"
) => void;
export type GroupJoinedEvent = (
    frame: UIFrame,
    e: "GROUP_JOINED",
    category: number,
    partyGUID: string
) => void;
export type GroupLeftEvent = (
    frame: UIFrame,
    e: "GROUP_LEFT",
    category: number,
    partyGUID: string
) => void;
export type GroupRosterUpdateEvent = (
    frame: UIFrame,
    e: "GROUP_ROSTER_UPDATE"
) => void;
export type InstanceBootStartEvent = (
    frame: UIFrame,
    e: "INSTANCE_BOOT_START"
) => void;
export type InstanceBootStopEvent = (
    frame: UIFrame,
    e: "INSTANCE_BOOT_STOP"
) => void;
export type InstanceGroupSizeChangedEvent = (
    frame: UIFrame,
    e: "INSTANCE_GROUP_SIZE_CHANGED"
) => void;
export type InviteToPartyConfirmationEvent = (
    frame: UIFrame,
    e: "INVITE_TO_PARTY_CONFIRMATION",
    targetName: string,
    willConvertToRaid: boolean,
    questSessionActive: boolean
) => void;
export type InviteTravelPassConfirmationEvent = (
    frame: UIFrame,
    e: "INVITE_TRAVEL_PASS_CONFIRMATION",
    targetName: string,
    targetGUID: string,
    willConvertToRaid: boolean,
    questSessionActive: boolean
) => void;
export type LeavePartyConfirmationEvent = (
    frame: UIFrame,
    e: "LEAVE_PARTY_CONFIRMATION"
) => void;
export type PartyInviteCancelEvent = (
    frame: UIFrame,
    e: "PARTY_INVITE_CANCEL"
) => void;
export type PartyInviteRequestEvent = (
    frame: UIFrame,
    e: "PARTY_INVITE_REQUEST",
    name: string,
    isTank: boolean,
    isHealer: boolean,
    isDamage: boolean,
    isNativeRealm: boolean,
    allowMultipleRoles: boolean,
    inviterGUID: string,
    questSessionActive: boolean
) => void;
export type PartyLeaderChangedEvent = (
    frame: UIFrame,
    e: "PARTY_LEADER_CHANGED"
) => void;
export type PartyLfgRestrictedEvent = (
    frame: UIFrame,
    e: "PARTY_LFG_RESTRICTED"
) => void;
export type PartyLootMethodChangedEvent = (
    frame: UIFrame,
    e: "PARTY_LOOT_METHOD_CHANGED"
) => void;
export type PartyMemberDisableEvent = (
    frame: UIFrame,
    e: "PARTY_MEMBER_DISABLE",
    unitTarget: string
) => void;
export type PartyMemberEnableEvent = (
    frame: UIFrame,
    e: "PARTY_MEMBER_ENABLE",
    unitTarget: string
) => void;
export type PlayerDifficultyChangedEvent = (
    frame: UIFrame,
    e: "PLAYER_DIFFICULTY_CHANGED"
) => void;
export type PlayerRolesAssignedEvent = (
    frame: UIFrame,
    e: "PLAYER_ROLES_ASSIGNED"
) => void;
export type RaidRosterUpdateEvent = (
    frame: UIFrame,
    e: "RAID_ROSTER_UPDATE"
) => void;
export type ReadyCheckEvent = (
    frame: UIFrame,
    e: "READY_CHECK",
    initiatorName: string,
    readyCheckTimeLeft: number
) => void;
export type ReadyCheckConfirmEvent = (
    frame: UIFrame,
    e: "READY_CHECK_CONFIRM",
    unitTarget: string,
    isReady: boolean
) => void;
export type ReadyCheckFinishedEvent = (
    frame: UIFrame,
    e: "READY_CHECK_FINISHED",
    preempted: boolean
) => void;
export type RequestInviteConfirmationEvent = (
    frame: UIFrame,
    e: "REQUEST_INVITE_CONFIRMATION",
    targetName: string,
    partyLevelLink: number,
    questSessionActive: boolean,
    tank: boolean | undefined,
    healer: boolean | undefined,
    dps: boolean | undefined
) => void;
export type RoleChangedInformEvent = (
    frame: UIFrame,
    e: "ROLE_CHANGED_INFORM",
    changedName: string,
    fromName: string,
    oldRole: string,
    newRole: string
) => void;
export type RolePollBeginEvent = (
    frame: UIFrame,
    e: "ROLE_POLL_BEGIN",
    fromName: string
) => void;
export type VoteKickReasonNeededEvent = (
    frame: UIFrame,
    e: "VOTE_KICK_REASON_NEEDED",
    name: string,
    resultGUID: string
) => void;
