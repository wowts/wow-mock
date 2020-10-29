import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ClubActionType {
    ErrorClubActionSubscribe = 0,
    ErrorClubActionCreate = 1,
    ErrorClubActionEdit = 2,
    ErrorClubActionDestroy = 3,
    ErrorClubActionLeave = 4,
    ErrorClubActionCreateTicket = 5,
    ErrorClubActionDestroyTicket = 6,
    ErrorClubActionRedeemTicket = 7,
    ErrorClubActionGetTicket = 8,
    ErrorClubActionGetTickets = 9,
    ErrorClubActionGetBans = 10,
    ErrorClubActionGetInvitations = 11,
    ErrorClubActionRevokeInvitation = 12,
    ErrorClubActionAcceptInvitation = 13,
    ErrorClubActionDeclineInvitation = 14,
    ErrorClubActionCreateStream = 15,
    ErrorClubActionEditStream = 16,
    ErrorClubActionDestroyStream = 17,
    ErrorClubActionInviteMember = 18,
    ErrorClubActionEditMember = 19,
    ErrorClubActionEditMemberNote = 20,
    ErrorClubActionKickMember = 21,
    ErrorClubActionAddBan = 22,
    ErrorClubActionRemoveBan = 23,
    ErrorClubActionCreateMessage = 24,
    ErrorClubActionEditMessage = 25,
    ErrorClubActionDestroyMessage = 26
}
export const enum ClubErrorType {
    ErrorCommunitiesNone = 0,
    ErrorCommunitiesUnknown = 1,
    ErrorCommunitiesNeutralFaction = 2,
    ErrorCommunitiesUnknownRealm = 3,
    ErrorCommunitiesBadTarget = 4,
    ErrorCommunitiesWrongFaction = 5,
    ErrorCommunitiesRestricted = 6,
    ErrorCommunitiesIgnored = 7,
    ErrorCommunitiesGuild = 8,
    ErrorCommunitiesWrongRegion = 9,
    ErrorCommunitiesUnknownTicket = 10,
    ErrorCommunitiesMissingShortName = 11,
    ErrorCommunitiesProfanity = 12,
    ErrorCommunitiesTrial = 13,
    ErrorCommunitiesVeteranTrial = 14,
    ErrorCommunitiesChatMute = 15,
    ErrorClubFull = 16,
    ErrorClubNoClub = 17,
    ErrorClubNotMember = 18,
    ErrorClubAlreadyMember = 19,
    ErrorClubNoSuchMember = 20,
    ErrorClubNoSuchInvitation = 21,
    ErrorClubInvitationAlreadyExists = 22,
    ErrorClubInvalidRoleID = 23,
    ErrorClubInsufficientPrivileges = 24,
    ErrorClubTooManyClubsJoined = 25,
    ErrorClubVoiceFull = 26,
    ErrorClubStreamNoStream = 27,
    ErrorClubStreamInvalidName = 28,
    ErrorClubStreamCountAtMin = 29,
    ErrorClubStreamCountAtMax = 30,
    ErrorClubMemberHasRequiredRole = 31,
    ErrorClubSentInvitationCountAtMax = 32,
    ErrorClubReceivedInvitationCountAtMax = 33,
    ErrorClubTargetIsBanned = 34,
    ErrorClubBanAlreadyExists = 35,
    ErrorClubBanCountAtMax = 36,
    ErrorClubTicketCountAtMax = 37,
    ErrorClubTicketNoSuchTicket = 38,
    ErrorClubTicketHasConsumedAllowedRedeemCount = 39
}
export const enum ClubFieldType {
    ClubName = 0,
    ClubShortName = 1,
    ClubDescription = 2,
    ClubBroadcast = 3,
    ClubStreamName = 4,
    ClubStreamSubject = 5,
    NumTypes = 6
}
export const enum ClubInvitationCandidateStatus {
    Available = 0,
    InvitePending = 1,
    AlreadyMember = 2
}
export const enum ClubMemberPresence {
    Unknown = 0,
    Online = 1,
    OnlineMobile = 2,
    Offline = 3,
    Away = 4,
    Busy = 5
}
export const enum ClubRemovedReason {
    None = 0,
    Banned = 1,
    Removed = 2,
    ClubDestroyed = 3
}
export const enum ClubRestrictionReason {
    None = 0,
    Unavailable = 1
}
export const enum ClubRoleIdentifier {
    Owner = 1,
    Leader = 2,
    Moderator = 3,
    Member = 4
}
export const enum ClubStreamNotificationFilter {
    None = 0,
    Mention = 1,
    All = 2
}
export const enum ClubStreamType {
    General = 0,
    Guild = 1,
    Officer = 2,
    Other = 3
}
export const enum ClubType {
    BattleNet = 0,
    Character = 1,
    Guild = 2,
    Other = 3
}
export const enum ValidateNameResult {
    NameSuccess = 0,
    NameFailure = 1,
    NameNoName = 2,
    NameTooShort = 3,
    NameTooLong = 4,
    NameInvalidCharacter = 5,
    NameMixedLanguages = 6,
    NameProfane = 7,
    NameReserved = 8,
    NameInvalidApostrophe = 9,
    NameMultipleApostrophes = 10,
    NameThreeConsecutive = 11,
    NameInvalidSpace = 12,
    NameConsecutiveSpaces = 13,
    NameRussianConsecutiveSilentCharacters = 14,
    NameRussianSilentCharacterAtBeginningOrEnd = 15,
    NameDeclensionDoesntMatchBaseName = 16,
    NameSpacesDisallowed = 17
}
export interface ClubInfo {
    clubId: string;
    name: string;
    shortName: string | undefined;
    description: string;
    broadcast: string;
    clubType: ClubType;
    avatarId: number;
    memberCount: number | undefined;
    favoriteTimeStamp: number | undefined;
    joinTime: number | undefined;
    socialQueueingEnabled: boolean | undefined
}
export interface ClubInvitationCandidateInfo {
    memberId: number;
    name: string;
    priority: number;
    status: ClubInvitationCandidateStatus
}
export interface ClubInvitationInfo {
    invitationId: string;
    isMyInvitation: boolean;
    invitee: ClubMemberInfo
}
export interface ClubLimits {
    maximumNumberOfStreams: number
}
export interface ClubMemberInfo {
    isSelf: boolean;
    memberId: number;
    name: string | undefined;
    role: ClubRoleIdentifier | undefined;
    presence: ClubMemberPresence;
    clubType: ClubType | undefined;
    guid: string | undefined;
    bnetAccountId: number | undefined;
    memberNote: string | undefined;
    officerNote: string | undefined;
    classID: number | undefined;
    race: number | undefined;
    level: number | undefined;
    zone: string | undefined;
    achievementPoints: number | undefined;
    profession1ID: number | undefined;
    profession1Rank: number | undefined;
    profession1Name: string | undefined;
    profession2ID: number | undefined;
    profession2Rank: number | undefined;
    profession2Name: string | undefined;
    lastOnlineYear: number | undefined;
    lastOnlineMonth: number | undefined;
    lastOnlineDay: number | undefined;
    lastOnlineHour: number | undefined;
    guildRank: string | undefined;
    guildRankOrder: number | undefined;
    isRemoteChat: boolean | undefined
}
export interface ClubMessageIdentifier {
    epoch: number;
    position: number
}
export interface ClubMessageInfo {
    messageId: ClubMessageIdentifier;
    content: string;
    author: ClubMemberInfo;
    destroyer: ClubMemberInfo | undefined;
    destroyed: boolean;
    edited: boolean
}
export interface ClubMessageRange {
    oldestMessageId: ClubMessageIdentifier;
    newestMessageId: ClubMessageIdentifier
}
export interface ClubPrivilegeInfo {
    canDestroy: boolean;
    canSetAttribute: boolean;
    canSetName: boolean;
    canSetDescription: boolean;
    canSetAvatar: boolean;
    canSetBroadcast: boolean;
    canSetPrivacyLevel: boolean;
    canSetOwnMemberAttribute: boolean;
    canSetOtherMemberAttribute: boolean;
    canSetOwnMemberNote: boolean;
    canSetOtherMemberNote: boolean;
    canSetOwnVoiceState: boolean;
    canSetOwnPresenceLevel: boolean;
    canUseVoice: boolean;
    canVoiceMuteMemberForAll: boolean;
    canGetInvitation: boolean;
    canSendInvitation: boolean;
    canSendGuestInvitation: boolean;
    canRevokeOwnInvitation: boolean;
    canRevokeOtherInvitation: boolean;
    canGetBan: boolean;
    canGetSuggestion: boolean;
    canSuggestMember: boolean;
    canGetTicket: boolean;
    canCreateTicket: boolean;
    canDestroyTicket: boolean;
    canAddBan: boolean;
    canRemoveBan: boolean;
    canCreateStream: boolean;
    canDestroyStream: boolean;
    canSetStreamPosition: boolean;
    canSetStreamAttribute: boolean;
    canSetStreamName: boolean;
    canSetStreamSubject: boolean;
    canSetStreamAccess: boolean;
    canSetStreamVoiceLevel: boolean;
    canCreateMessage: boolean;
    canDestroyOwnMessage: boolean;
    canDestroyOtherMessage: boolean;
    canEditOwnMessage: boolean;
    canPinMessage: boolean;
    kickableRoleIds: LuaArray<number>
}
export interface ClubSelfInvitationInfo {
    invitationId: string;
    club: ClubInfo;
    inviter: ClubMemberInfo;
    leaders: LuaArray<ClubMemberInfo>
}
export interface ClubStreamInfo {
    streamId: string;
    name: string;
    subject: string;
    leadersAndModeratorsOnly: boolean;
    streamType: ClubStreamType;
    creationTime: number
}
export interface ClubStreamNotificationSetting {
    streamId: string;
    filter: ClubStreamNotificationFilter
}
export interface ClubTicketInfo {
    ticketId: string;
    allowedRedeemCount: number;
    currentRedeemCount: number;
    creationTime: number;
    expirationTime: number;
    defaultStreamId: string | undefined;
    creator: ClubMemberInfo
}
export const C_Club = {
    AcceptInvitation: (clubId: string): void => {},
    AddClubStreamChatChannel: (clubId: string, streamId: string): void => {},
    AdvanceStreamViewMarker: (clubId: string, streamId: string): void => {},
    AssignMemberRole: (clubId: string, memberId: number, roleId: ClubRoleIdentifier): void => {},
    CanResolvePlayerLocationFromClubMessageData: (clubId: string, streamId: string, epoch: number, position: number): boolean => {return false},
    ClearAutoAdvanceStreamViewMarker: (): void => {},
    ClearClubPresenceSubscription: (): void => {},
    CompareBattleNetDisplayName: (clubId: string, lhsMemberId: number, rhsMemberId: number): number => {return 0},
    CreateClub: (name: string, shortName: string | undefined, description: string, clubType: ClubType, avatarId: number): void => {},
    CreateStream: (clubId: string, name: string, subject: string, leadersAndModeratorsOnly: boolean): void => {},
    CreateTicket: (clubId: string, allowedRedeemCount: number | undefined, duration: number | undefined, defaultStreamId: string | undefined): void => {},
    DeclineInvitation: (clubId: string): void => {},
    DestroyClub: (clubId: string): void => {},
    DestroyMessage: (clubId: string, streamId: string, messageId: ClubMessageIdentifier): void => {},
    DestroyStream: (clubId: string, streamId: string): void => {},
    DestroyTicket: (clubId: string, ticketId: string): void => {},
    EditClub: (clubId: string, name: string | undefined, shortName: string | undefined, description: string | undefined, avatarId: number | undefined, broadcast: string | undefined): void => {},
    EditMessage: (clubId: string, streamId: string, messageId: ClubMessageIdentifier, message: string): void => {},
    EditStream: (clubId: string, streamId: string, name: string | undefined, subject: string | undefined, leadersAndModeratorsOnly: boolean | undefined): void => {},
    Flush: (): void => {},
    FocusStream: (clubId: string, streamId: string): boolean => {return false},
    GetAssignableRoles: (clubId: string, memberId: number): LuaArray<ClubRoleIdentifier> => {return {} as any},
    GetAvatarIdList: (clubType: ClubType): LuaArray<number> | undefined => {return {} as any},
    GetClubCapacity: (): number => {return 0},
    GetClubInfo: (clubId: string): ClubInfo | undefined => {return {clubId: '', name: '', shortName: '', description: '', broadcast: '', clubType: ClubType.BattleNet, avatarId: 0, memberCount: 0, favoriteTimeStamp: 0, joinTime: 0, socialQueueingEnabled: false}},
    GetClubLimits: (clubType: ClubType): ClubLimits => {return {maximumNumberOfStreams: 0}},
    GetClubMembers: (clubId: string, streamId: string | undefined): LuaArray<number> => {return {} as any},
    GetClubPrivileges: (clubId: string): ClubPrivilegeInfo => {return {canDestroy: false, canSetAttribute: false, canSetName: false, canSetDescription: false, canSetAvatar: false, canSetBroadcast: false, canSetPrivacyLevel: false, canSetOwnMemberAttribute: false, canSetOtherMemberAttribute: false, canSetOwnMemberNote: false, canSetOtherMemberNote: false, canSetOwnVoiceState: false, canSetOwnPresenceLevel: false, canUseVoice: false, canVoiceMuteMemberForAll: false, canGetInvitation: false, canSendInvitation: false, canSendGuestInvitation: false, canRevokeOwnInvitation: false, canRevokeOtherInvitation: false, canGetBan: false, canGetSuggestion: false, canSuggestMember: false, canGetTicket: false, canCreateTicket: false, canDestroyTicket: false, canAddBan: false, canRemoveBan: false, canCreateStream: false, canDestroyStream: false, canSetStreamPosition: false, canSetStreamAttribute: false, canSetStreamName: false, canSetStreamSubject: false, canSetStreamAccess: false, canSetStreamVoiceLevel: false, canCreateMessage: false, canDestroyOwnMessage: false, canDestroyOtherMessage: false, canEditOwnMessage: false, canPinMessage: false, kickableRoleIds: {} as any}},
    GetClubStreamNotificationSettings: (clubId: string): LuaArray<ClubStreamNotificationSetting> => {return {} as any},
    GetCommunityNameResultText: (result: ValidateNameResult): string | undefined => {return ''},
    GetGuildClubId: (): string | undefined => {return ''},
    GetInfoFromLastCommunityChatLine: (): [messageInfo: ClubMessageInfo, clubId: string, streamId: string, clubType: ClubType] => {return [{messageId: {epoch: 0, position: 0}, content: '', author: {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}, destroyer: {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}, destroyed: false, edited: false}, '', '', ClubType.BattleNet]},
    GetInvitationCandidates: (filter: string | undefined, maxResults: number | undefined, cursorPosition: number | undefined, allowFullMatch: boolean | undefined, clubId: string): LuaArray<ClubInvitationCandidateInfo> => {return {} as any},
    GetInvitationInfo: (clubId: string): ClubSelfInvitationInfo | undefined => {return {invitationId: '', club: {clubId: '', name: '', shortName: '', description: '', broadcast: '', clubType: ClubType.BattleNet, avatarId: 0, memberCount: 0, favoriteTimeStamp: 0, joinTime: 0, socialQueueingEnabled: false}, inviter: {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}, leaders: {} as any}},
    GetInvitationsForClub: (clubId: string): LuaArray<ClubInvitationInfo> => {return {} as any},
    GetInvitationsForSelf: (): LuaArray<ClubSelfInvitationInfo> => {return {} as any},
    GetLastTicketResponse: (ticket: string): [error: ClubErrorType, info: ClubInfo | undefined, showError: boolean] => {return [ClubErrorType.ErrorCommunitiesNone, {clubId: '', name: '', shortName: '', description: '', broadcast: '', clubType: ClubType.BattleNet, avatarId: 0, memberCount: 0, favoriteTimeStamp: 0, joinTime: 0, socialQueueingEnabled: false}, false]},
    GetMemberInfo: (clubId: string, memberId: number): ClubMemberInfo | undefined => {return {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}},
    GetMemberInfoForSelf: (clubId: string): ClubMemberInfo | undefined => {return {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}},
    GetMessageInfo: (clubId: string, streamId: string, messageId: ClubMessageIdentifier): ClubMessageInfo | undefined => {return {messageId: {epoch: 0, position: 0}, content: '', author: {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}, destroyer: {isSelf: false, memberId: 0, name: '', role: ClubRoleIdentifier.Owner, presence: ClubMemberPresence.Unknown, clubType: ClubType.BattleNet, guid: '', bnetAccountId: 0, memberNote: '', officerNote: '', classID: 0, race: 0, level: 0, zone: '', achievementPoints: 0, profession1ID: 0, profession1Rank: 0, profession1Name: '', profession2ID: 0, profession2Rank: 0, profession2Name: '', lastOnlineYear: 0, lastOnlineMonth: 0, lastOnlineDay: 0, lastOnlineHour: 0, guildRank: '', guildRankOrder: 0, isRemoteChat: false}, destroyed: false, edited: false}},
    GetMessageRanges: (clubId: string, streamId: string): LuaArray<ClubMessageRange> => {return {} as any},
    GetMessagesBefore: (clubId: string, streamId: string, newest: ClubMessageIdentifier, count: number): LuaArray<ClubMessageInfo> => {return {} as any},
    GetMessagesInRange: (clubId: string, streamId: string, oldest: ClubMessageIdentifier, newest: ClubMessageIdentifier): LuaArray<ClubMessageInfo> => {return {} as any},
    GetStreamInfo: (clubId: string, streamId: string): ClubStreamInfo | undefined => {return {streamId: '', name: '', subject: '', leadersAndModeratorsOnly: false, streamType: ClubStreamType.General, creationTime: 0}},
    GetStreamViewMarker: (clubId: string, streamId: string): number | undefined => {return 0},
    GetStreams: (clubId: string): LuaArray<ClubStreamInfo> => {return {} as any},
    GetSubscribedClubs: (): LuaArray<ClubInfo> => {return {} as any},
    GetTickets: (clubId: string): LuaArray<ClubTicketInfo> => {return {} as any},
    IsAccountMuted: (clubId: string): boolean => {return false},
    IsBeginningOfStream: (clubId: string, streamId: string, messageId: ClubMessageIdentifier): boolean => {return false},
    IsEnabled: (): boolean => {return false},
    IsRestricted: (): ClubRestrictionReason => {return ClubRestrictionReason.None},
    IsSubscribedToStream: (clubId: string, streamId: string): boolean => {return false},
    KickMember: (clubId: string, memberId: number): void => {},
    LeaveClub: (clubId: string): void => {},
    RedeemTicket: (ticketId: string): void => {},
    RequestInvitationsForClub: (clubId: string): void => {},
    RequestMoreMessagesBefore: (clubId: string, streamId: string, messageId: ClubMessageIdentifier | undefined, count: number | undefined): boolean => {return false},
    RequestTicket: (ticketId: string): void => {},
    RequestTickets: (clubId: string): void => {},
    RevokeInvitation: (clubId: string, memberId: number): void => {},
    SendBattleTagFriendRequest: (guildClubId: string, memberId: number): void => {},
    SendCharacterInvitation: (clubId: string, character: string): void => {},
    SendInvitation: (clubId: string, memberId: number): void => {},
    SendMessage: (clubId: string, streamId: string, message: string): void => {},
    SetAutoAdvanceStreamViewMarker: (clubId: string, streamId: string): void => {},
    SetAvatarTexture: (texture: any, avatarId: number, clubType: ClubType): void => {},
    SetClubMemberNote: (clubId: string, memberId: number, note: string): void => {},
    SetClubPresenceSubscription: (clubId: string): void => {},
    SetClubStreamNotificationSettings: (clubId: string, settings: LuaArray<ClubStreamNotificationSetting>): void => {},
    SetFavorite: (clubId: string, isFavorite: boolean): void => {},
    SetSocialQueueingEnabled: (clubId: string, enabled: boolean): void => {},
    ShouldAllowClubType: (clubType: ClubType): boolean => {return false},
    UnfocusStream: (clubId: string, streamId: string): void => {},
    ValidateText: (clubType: ClubType, text: string, clubFieldType: ClubFieldType): ValidateNameResult => {return ValidateNameResult.NameSuccess},
};
export type AvatarListUpdatedEvent = (frame: UIFrame, e: "AVATAR_LIST_UPDATED", clubType: ClubType) => void
export type ClubAddedEvent = (frame: UIFrame, e: "CLUB_ADDED", clubId: string) => void
export type ClubErrorEvent = (frame: UIFrame, e: "CLUB_ERROR", action: ClubActionType, error: ClubErrorType, clubType: ClubType) => void
export type ClubInvitationAddedForSelfEvent = (frame: UIFrame, e: "CLUB_INVITATION_ADDED_FOR_SELF", invitation: ClubSelfInvitationInfo) => void
export type ClubInvitationRemovedForSelfEvent = (frame: UIFrame, e: "CLUB_INVITATION_REMOVED_FOR_SELF", invitationId: string) => void
export type ClubInvitationsReceivedForClubEvent = (frame: UIFrame, e: "CLUB_INVITATIONS_RECEIVED_FOR_CLUB", clubId: string) => void
export type ClubMemberAddedEvent = (frame: UIFrame, e: "CLUB_MEMBER_ADDED", clubId: string, memberId: number) => void
export type ClubMemberPresenceUpdatedEvent = (frame: UIFrame, e: "CLUB_MEMBER_PRESENCE_UPDATED", clubId: string, memberId: number, presence: ClubMemberPresence) => void
export type ClubMemberRemovedEvent = (frame: UIFrame, e: "CLUB_MEMBER_REMOVED", clubId: string, memberId: number) => void
export type ClubMemberRoleUpdatedEvent = (frame: UIFrame, e: "CLUB_MEMBER_ROLE_UPDATED", clubId: string, memberId: number, roleId: number) => void
export type ClubMemberUpdatedEvent = (frame: UIFrame, e: "CLUB_MEMBER_UPDATED", clubId: string, memberId: number) => void
export type ClubMessageAddedEvent = (frame: UIFrame, e: "CLUB_MESSAGE_ADDED", clubId: string, streamId: string, messageId: ClubMessageIdentifier) => void
export type ClubMessageHistoryReceivedEvent = (frame: UIFrame, e: "CLUB_MESSAGE_HISTORY_RECEIVED", clubId: string, streamId: string, downloadedRange: ClubMessageRange, contiguousRange: ClubMessageRange) => void
export type ClubMessageUpdatedEvent = (frame: UIFrame, e: "CLUB_MESSAGE_UPDATED", clubId: string, streamId: string, messageId: ClubMessageIdentifier) => void
export type ClubRemovedEvent = (frame: UIFrame, e: "CLUB_REMOVED", clubId: string) => void
export type ClubRemovedMessageEvent = (frame: UIFrame, e: "CLUB_REMOVED_MESSAGE", clubName: string, clubRemovedReason: ClubRemovedReason) => void
export type ClubSelfMemberRoleUpdatedEvent = (frame: UIFrame, e: "CLUB_SELF_MEMBER_ROLE_UPDATED", clubId: string, roleId: number) => void
export type ClubStreamAddedEvent = (frame: UIFrame, e: "CLUB_STREAM_ADDED", clubId: string, streamId: string) => void
export type ClubStreamRemovedEvent = (frame: UIFrame, e: "CLUB_STREAM_REMOVED", clubId: string, streamId: string) => void
export type ClubStreamSubscribedEvent = (frame: UIFrame, e: "CLUB_STREAM_SUBSCRIBED", clubId: string, streamId: string) => void
export type ClubStreamUnsubscribedEvent = (frame: UIFrame, e: "CLUB_STREAM_UNSUBSCRIBED", clubId: string, streamId: string) => void
export type ClubStreamUpdatedEvent = (frame: UIFrame, e: "CLUB_STREAM_UPDATED", clubId: string, streamId: string) => void
export type ClubStreamsLoadedEvent = (frame: UIFrame, e: "CLUB_STREAMS_LOADED", clubId: string) => void
export type ClubTicketCreatedEvent = (frame: UIFrame, e: "CLUB_TICKET_CREATED", clubId: string, ticketInfo: ClubTicketInfo) => void
export type ClubTicketReceivedEvent = (frame: UIFrame, e: "CLUB_TICKET_RECEIVED", ticket: string) => void
export type ClubTicketsReceivedEvent = (frame: UIFrame, e: "CLUB_TICKETS_RECEIVED", clubId: string) => void
export type ClubUpdatedEvent = (frame: UIFrame, e: "CLUB_UPDATED", clubId: string) => void
export type InitialClubsLoadedEvent = (frame: UIFrame, e: "INITIAL_CLUBS_LOADED") => void
export type StreamViewMarkerUpdatedEvent = (frame: UIFrame, e: "STREAM_VIEW_MARKER_UPDATED", clubId: string, streamId: string, lastReadTime: number | undefined) => void