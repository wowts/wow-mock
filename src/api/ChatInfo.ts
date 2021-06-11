import { ChatChannelRuleset, ChatChannelType } from "./common";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_ChatInfo = {
    GetChannelRosterInfo: (
        channelIndex: number,
        rosterIndex: number
    ): [name: string, owner: boolean, moderator: boolean, guid: string] => {
        return ["", false, false, ""];
    },
    GetChannelRuleset: (channelIndex: number): ChatChannelRuleset => {
        return ChatChannelRuleset.None;
    },
    GetChannelRulesetForChannelID: (channelID: number): ChatChannelRuleset => {
        return ChatChannelRuleset.None;
    },
    GetChannelShortcut: (channelIndex: number): string => {
        return "";
    },
    GetChannelShortcutForChannelID: (channelID: number): string => {
        return "";
    },
    GetClubStreamIDs: (clubID: string): LuaArray<string> => {
        return {} as any;
    },
    GetGeneralChannelID: (): number => {
        return 0;
    },
    GetGeneralChannelLocalID: (): number | undefined => {
        return 0;
    },
    GetMentorChannelID: (): number => {
        return 0;
    },
    GetNumActiveChannels: (): number => {
        return 0;
    },
    GetRegisteredAddonMessagePrefixes: (): LuaArray<string> => {
        return {} as any;
    },
    IsAddonMessagePrefixRegistered: (prefix: string): boolean => {
        return false;
    },
    IsChannelRegional: (channelIndex: number): boolean => {
        return false;
    },
    IsChannelRegionalForChannelID: (channelID: number): boolean => {
        return false;
    },
    IsPartyChannelType: (channelType: ChatChannelType): boolean => {
        return false;
    },
    IsRegionalServiceAvailable: (): boolean => {
        return false;
    },
    IsValidChatLine: (chatLine: number | undefined): boolean => {
        return false;
    },
    RegisterAddonMessagePrefix: (prefix: string): boolean => {
        return false;
    },
    ReplaceIconAndGroupExpressions: (
        input: string,
        noIconReplacement: boolean | undefined,
        noGroupReplacement: boolean | undefined
    ): string => {
        return "";
    },
    ResetDefaultZoneChannels: (): void => {},
    SendAddonMessage: (
        prefix: string,
        message: string,
        chatType: string | undefined,
        target: string | undefined
    ): boolean => {
        return false;
    },
    SendAddonMessageLogged: (
        prefix: string,
        message: string,
        chatType: string | undefined,
        target: string | undefined
    ): boolean => {
        return false;
    },
    SwapChatChannelsByChannelIndex: (
        firstChannelIndex: number,
        secondChannelIndex: number
    ): void => {},
};
export type AlternativeDefaultLanguageChangedEvent = (
    frame: UIFrame,
    e: "ALTERNATIVE_DEFAULT_LANGUAGE_CHANGED"
) => void;
export type BnChatMsgAddonEvent = (
    frame: UIFrame,
    e: "BN_CHAT_MSG_ADDON",
    prefix: string,
    text: string,
    channel: string,
    senderID: number
) => void;
export type ChannelCountUpdateEvent = (
    frame: UIFrame,
    e: "CHANNEL_COUNT_UPDATE",
    displayIndex: number,
    count: number
) => void;
export type ChannelFlagsUpdatedEvent = (
    frame: UIFrame,
    e: "CHANNEL_FLAGS_UPDATED",
    displayIndex: number
) => void;
export type ChannelInviteRequestEvent = (
    frame: UIFrame,
    e: "CHANNEL_INVITE_REQUEST",
    channelID: string,
    name: string
) => void;
export type ChannelLeftEvent = (
    frame: UIFrame,
    e: "CHANNEL_LEFT",
    chatChannelID: number,
    name: string
) => void;
export type ChannelPasswordRequestEvent = (
    frame: UIFrame,
    e: "CHANNEL_PASSWORD_REQUEST",
    channelID: string
) => void;
export type ChannelRosterUpdateEvent = (
    frame: UIFrame,
    e: "CHANNEL_ROSTER_UPDATE",
    displayIndex: number,
    count: number
) => void;
export type ChannelUiUpdateEvent = (
    frame: UIFrame,
    e: "CHANNEL_UI_UPDATE"
) => void;
export type ChatCombatMsgArenaPointsGainEvent = (
    frame: UIFrame,
    e: "CHAT_COMBAT_MSG_ARENA_POINTS_GAIN",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgAchievementEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_ACHIEVEMENT",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgAddonEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_ADDON",
    prefix: string,
    text: string,
    channel: string,
    sender: string,
    target: string,
    zoneChannelID: number,
    localID: number,
    name: string,
    instanceID: number
) => void;
export type ChatMsgAddonLoggedEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_ADDON_LOGGED",
    prefix: string,
    text: string,
    channel: string,
    sender: string,
    target: string,
    zoneChannelID: number,
    localID: number,
    name: string,
    instanceID: number
) => void;
export type ChatMsgAfkEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_AFK",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBgSystemAllianceEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BG_SYSTEM_ALLIANCE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBgSystemHordeEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BG_SYSTEM_HORDE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBgSystemNeutralEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BG_SYSTEM_NEUTRAL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnInlineToastAlertEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_INLINE_TOAST_ALERT",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnInlineToastBroadcastEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_INLINE_TOAST_BROADCAST",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnInlineToastBroadcastInformEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_INLINE_TOAST_BROADCAST_INFORM",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnInlineToastConversationEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_INLINE_TOAST_CONVERSATION",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnWhisperEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_WHISPER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnWhisperInformEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_WHISPER_INFORM",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgBnWhisperPlayerOfflineEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_BN_WHISPER_PLAYER_OFFLINE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelJoinEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_JOIN",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelLeaveEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_LEAVE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelLeavePreventedEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_LEAVE_PREVENTED",
    channelName: string
) => void;
export type ChatMsgChannelListEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_LIST",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelNoticeEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_NOTICE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgChannelNoticeUserEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CHANNEL_NOTICE_USER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCombatFactionChangeEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_COMBAT_FACTION_CHANGE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCombatHonorGainEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_COMBAT_HONOR_GAIN",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCombatMiscInfoEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_COMBAT_MISC_INFO",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCombatXpGainEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_COMBAT_XP_GAIN",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCommunitiesChannelEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_COMMUNITIES_CHANNEL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgCurrencyEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_CURRENCY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgDndEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_DND",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgEmoteEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_EMOTE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgFilteredEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_FILTERED",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgGuildEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_GUILD",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgGuildAchievementEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_GUILD_ACHIEVEMENT",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgGuildItemLootedEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_GUILD_ITEM_LOOTED",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgIgnoredEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_IGNORED",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgInstanceChatEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_INSTANCE_CHAT",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgInstanceChatLeaderEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_INSTANCE_CHAT_LEADER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgLootEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_LOOT",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMoneyEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONEY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMonsterEmoteEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONSTER_EMOTE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMonsterPartyEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONSTER_PARTY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMonsterSayEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONSTER_SAY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMonsterWhisperEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONSTER_WHISPER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgMonsterYellEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_MONSTER_YELL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgOfficerEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_OFFICER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgOpeningEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_OPENING",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgPartyEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_PARTY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgPartyLeaderEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_PARTY_LEADER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgPetBattleCombatLogEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_PET_BATTLE_COMBAT_LOG",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgPetBattleInfoEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_PET_BATTLE_INFO",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgPetInfoEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_PET_INFO",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRaidEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RAID",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRaidBossEmoteEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RAID_BOSS_EMOTE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRaidBossWhisperEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RAID_BOSS_WHISPER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRaidLeaderEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RAID_LEADER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRaidWarningEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RAID_WARNING",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgRestrictedEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_RESTRICTED",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgSayEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_SAY",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgSkillEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_SKILL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgSystemEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_SYSTEM",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgTargeticonsEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_TARGETICONS",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgTextEmoteEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_TEXT_EMOTE",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgTradeskillsEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_TRADESKILLS",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgWhisperEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_WHISPER",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgWhisperInformEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_WHISPER_INFORM",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatMsgYellEvent = (
    frame: UIFrame,
    e: "CHAT_MSG_YELL",
    text: string,
    playerName: string,
    languageName: string,
    channelName: string,
    playerName2: string,
    specialFlags: string,
    zoneChannelID: number,
    channelIndex: number,
    channelBaseName: string,
    unused: number,
    lineID: number,
    guid: string,
    bnSenderID: number,
    isMobile: boolean,
    isSubtitle: boolean,
    hideSenderInLetterbox: boolean,
    supressRaidIcons: boolean
) => void;
export type ChatRegionalSendFailedEvent = (
    frame: UIFrame,
    e: "CHAT_REGIONAL_SEND_FAILED"
) => void;
export type ChatRegionalStatusChangedEvent = (
    frame: UIFrame,
    e: "CHAT_REGIONAL_STATUS_CHANGED",
    isServiceAvailable: boolean
) => void;
export type ChatServerDisconnectedEvent = (
    frame: UIFrame,
    e: "CHAT_SERVER_DISCONNECTED",
    isInitialMessage: boolean | undefined
) => void;
export type ChatServerReconnectedEvent = (
    frame: UIFrame,
    e: "CHAT_SERVER_RECONNECTED"
) => void;
export type ClearBossEmotesEvent = (
    frame: UIFrame,
    e: "CLEAR_BOSS_EMOTES"
) => void;
export type LanguageListChangedEvent = (
    frame: UIFrame,
    e: "LANGUAGE_LIST_CHANGED"
) => void;
export type QuestBossEmoteEvent = (
    frame: UIFrame,
    e: "QUEST_BOSS_EMOTE",
    text: string,
    playerName: string,
    displayTime: number,
    enableBossEmoteWarningSound: boolean
) => void;
export type RaidBossEmoteEvent = (
    frame: UIFrame,
    e: "RAID_BOSS_EMOTE",
    text: string,
    playerName: string,
    displayTime: number,
    enableBossEmoteWarningSound: boolean
) => void;
export type RaidBossWhisperEvent = (
    frame: UIFrame,
    e: "RAID_BOSS_WHISPER",
    text: string,
    playerName: string,
    displayTime: number,
    enableBossEmoteWarningSound: boolean
) => void;
export type RaidInstanceWelcomeEvent = (
    frame: UIFrame,
    e: "RAID_INSTANCE_WELCOME",
    mapname: string,
    timeLeft: number,
    locked: number,
    extended: number
) => void;
export type UpdateChatColorEvent = (
    frame: UIFrame,
    e: "UPDATE_CHAT_COLOR",
    name: string,
    r: number,
    g: number,
    b: number
) => void;
export type UpdateChatColorNameByClassEvent = (
    frame: UIFrame,
    e: "UPDATE_CHAT_COLOR_NAME_BY_CLASS",
    name: string,
    colorNameByClass: boolean
) => void;
export type UpdateChatWindowsEvent = (
    frame: UIFrame,
    e: "UPDATE_CHAT_WINDOWS"
) => void;
export type UpdateFloatingChatWindowsEvent = (
    frame: UIFrame,
    e: "UPDATE_FLOATING_CHAT_WINDOWS"
) => void;
