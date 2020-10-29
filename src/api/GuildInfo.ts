import { GuildTabardInfo } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface GuildNewsInfo {
    isSticky: boolean;
    isHeader: boolean;
    newsType: number;
    whoText: string | undefined;
    whatText: string | undefined;
    newsDataID: number;
    data: LuaArray<number>;
    weekday: number;
    day: number;
    month: number;
    year: number;
    guildMembersPresent: number
}
export const C_GuildInfo = {
    CanEditOfficerNote: (): boolean => {return false},
    CanSpeakInGuildChat: (): boolean => {return false},
    CanViewOfficerNote: (): boolean => {return false},
    GetGuildNewsInfo: (index: number): GuildNewsInfo => {return {isSticky: false, isHeader: false, newsType: 0, whoText: '', whatText: '', newsDataID: 0, data: {} as any, weekday: 0, day: 0, month: 0, year: 0, guildMembersPresent: 0}},
    GetGuildRankOrder: (guid: string): number => {return 0},
    GetGuildTabardInfo: (unit: string | undefined): GuildTabardInfo | undefined => {return {} as any},
    GuildControlGetRankFlags: (rankOrder: number): LuaArray<boolean> => {return {} as any},
    GuildRoster: (): void => {},
    IsGuildOfficer: (): boolean => {return false},
    IsGuildRankAssignmentAllowed: (guid: string, rankOrder: number): boolean => {return false},
    QueryGuildMemberRecipes: (guildMemberGUID: string, skillLineID: number): void => {},
    RemoveFromGuild: (guid: string): void => {},
    SetGuildRankOrder: (guid: string, rankOrder: number): void => {},
    SetNote: (guid: string, note: string, isPublic: boolean): void => {},
};
export type CloseTabardFrameEvent = (frame: UIFrame, e: "CLOSE_TABARD_FRAME") => void
export type DisableDeclineGuildInviteEvent = (frame: UIFrame, e: "DISABLE_DECLINE_GUILD_INVITE") => void
export type EnableDeclineGuildInviteEvent = (frame: UIFrame, e: "ENABLE_DECLINE_GUILD_INVITE") => void
export type GuildChallengeCompletedEvent = (frame: UIFrame, e: "GUILD_CHALLENGE_COMPLETED", challengeType: number, currentCount: number, maxCount: number, goldAwarded: number) => void
export type GuildChallengeUpdatedEvent = (frame: UIFrame, e: "GUILD_CHALLENGE_UPDATED") => void
export type GuildEventLogUpdateEvent = (frame: UIFrame, e: "GUILD_EVENT_LOG_UPDATE") => void
export type GuildInviteCancelEvent = (frame: UIFrame, e: "GUILD_INVITE_CANCEL") => void
export type GuildInviteRequestEvent = (frame: UIFrame, e: "GUILD_INVITE_REQUEST", inviter: string, guildName: string, guildAchievementPoints: number, oldGuildName: string, isNewGuild: boolean | undefined, tabardInfo: GuildTabardInfo | undefined) => void
export type GuildMotdEvent = (frame: UIFrame, e: "GUILD_MOTD", motdText: string) => void
export type GuildNewsUpdateEvent = (frame: UIFrame, e: "GUILD_NEWS_UPDATE") => void
export type GuildPartyStateUpdatedEvent = (frame: UIFrame, e: "GUILD_PARTY_STATE_UPDATED", inGuildParty: boolean) => void
export type GuildRanksUpdateEvent = (frame: UIFrame, e: "GUILD_RANKS_UPDATE") => void
export type GuildRecipeKnownByMembersEvent = (frame: UIFrame, e: "GUILD_RECIPE_KNOWN_BY_MEMBERS") => void
export type GuildRegistrarClosedEvent = (frame: UIFrame, e: "GUILD_REGISTRAR_CLOSED") => void
export type GuildRegistrarShowEvent = (frame: UIFrame, e: "GUILD_REGISTRAR_SHOW") => void
export type GuildRenameRequiredEvent = (frame: UIFrame, e: "GUILD_RENAME_REQUIRED", flagSet: boolean) => void
export type GuildRewardsListEvent = (frame: UIFrame, e: "GUILD_REWARDS_LIST") => void
export type GuildRosterUpdateEvent = (frame: UIFrame, e: "GUILD_ROSTER_UPDATE", canRequestRosterUpdate: boolean) => void
export type GuildTradeskillUpdateEvent = (frame: UIFrame, e: "GUILD_TRADESKILL_UPDATE") => void
export type GuildtabardUpdateEvent = (frame: UIFrame, e: "GUILDTABARD_UPDATE") => void
export type OpenTabardFrameEvent = (frame: UIFrame, e: "OPEN_TABARD_FRAME") => void
export type PlayerGuildUpdateEvent = (frame: UIFrame, e: "PLAYER_GUILD_UPDATE", unitTarget: string) => void
export type RequiredGuildRenameResultEvent = (frame: UIFrame, e: "REQUIRED_GUILD_RENAME_RESULT", success: boolean) => void
export type TabardCansaveChangedEvent = (frame: UIFrame, e: "TABARD_CANSAVE_CHANGED") => void
export type TabardSavePendingEvent = (frame: UIFrame, e: "TABARD_SAVE_PENDING") => void