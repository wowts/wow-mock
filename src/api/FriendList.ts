import { RafLinkType } from "./common";
import { UIFrame } from "../ui";
export interface FriendInfo {
    connected: boolean;
    name: string;
    className: string | undefined;
    area: string | undefined;
    notes: string | undefined;
    guid: string;
    level: number;
    dnd: boolean;
    afk: boolean;
    rafLinkType: RafLinkType;
    mobile: boolean;
}
export interface WhoInfo {
    fullName: string;
    fullGuildName: string;
    level: number;
    raceStr: string;
    classStr: string;
    area: string;
    filename: string | undefined;
    gender: number;
}
export const C_FriendList = {
    AddFriend: (name: string, notes: string | undefined): void => {},
    AddIgnore: (name: string): boolean => {
        return false;
    },
    AddOrDelIgnore: (name: string): void => {},
    AddOrRemoveFriend: (name: string, notes: string): void => {},
    DelIgnore: (name: string): boolean => {
        return false;
    },
    DelIgnoreByIndex: (index: number): void => {},
    GetFriendInfo: (name: string): FriendInfo => {
        return {
            connected: false,
            name: "",
            className: "",
            area: "",
            notes: "",
            guid: "",
            level: 0,
            dnd: false,
            afk: false,
            rafLinkType: RafLinkType.None,
            mobile: false,
        };
    },
    GetFriendInfoByIndex: (index: number): FriendInfo => {
        return {
            connected: false,
            name: "",
            className: "",
            area: "",
            notes: "",
            guid: "",
            level: 0,
            dnd: false,
            afk: false,
            rafLinkType: RafLinkType.None,
            mobile: false,
        };
    },
    GetIgnoreName: (index: number): string | undefined => {
        return "";
    },
    GetNumFriends: (): number => {
        return 0;
    },
    GetNumIgnores: (): number => {
        return 0;
    },
    GetNumOnlineFriends: (): number => {
        return 0;
    },
    GetNumWhoResults: (): [numWhos: number, totalNumWhos: number] => {
        return [0, 0];
    },
    GetSelectedFriend: (): number | undefined => {
        return 0;
    },
    GetSelectedIgnore: (): number | undefined => {
        return 0;
    },
    GetWhoInfo: (index: number): WhoInfo => {
        return {
            fullName: "",
            fullGuildName: "",
            level: 0,
            raceStr: "",
            classStr: "",
            area: "",
            filename: "",
            gender: 0,
        };
    },
    IsFriend: (guid: string): boolean => {
        return false;
    },
    IsIgnored: (token: string): boolean => {
        return false;
    },
    IsIgnoredByGuid: (guid: string): boolean => {
        return false;
    },
    RemoveFriend: (name: string): boolean => {
        return false;
    },
    RemoveFriendByIndex: (index: number): void => {},
    SendWho: (filter: string): void => {},
    SetFriendNotes: (name: string, notes: string): boolean => {
        return false;
    },
    SetFriendNotesByIndex: (index: number, notes: string): void => {},
    SetSelectedFriend: (index: number): void => {},
    SetSelectedIgnore: (index: number): void => {},
    SetWhoToUi: (whoToUi: boolean): void => {},
    ShowFriends: (): void => {},
    SortWho: (sorting: string): void => {},
};
export type BattletagInviteShowEvent = (
    frame: UIFrame,
    e: "BATTLETAG_INVITE_SHOW",
    name: string
) => void;
export type BnBlockFailedTooManyEvent = (
    frame: UIFrame,
    e: "BN_BLOCK_FAILED_TOO_MANY",
    blockType: string
) => void;
export type BnBlockListUpdatedEvent = (
    frame: UIFrame,
    e: "BN_BLOCK_LIST_UPDATED"
) => void;
export type BnChatWhisperUndeliverableEvent = (
    frame: UIFrame,
    e: "BN_CHAT_WHISPER_UNDELIVERABLE",
    senderID: number
) => void;
export type BnConnectedEvent = (
    frame: UIFrame,
    e: "BN_CONNECTED",
    suppressNotification: boolean
) => void;
export type BnCustomMessageChangedEvent = (
    frame: UIFrame,
    e: "BN_CUSTOM_MESSAGE_CHANGED",
    id: number | undefined
) => void;
export type BnCustomMessageLoadedEvent = (
    frame: UIFrame,
    e: "BN_CUSTOM_MESSAGE_LOADED"
) => void;
export type BnDisconnectedEvent = (
    frame: UIFrame,
    e: "BN_DISCONNECTED",
    result: boolean,
    suppressNotification: boolean
) => void;
export type BnFriendAccountOfflineEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_ACCOUNT_OFFLINE",
    friendId: number,
    isCompanionApp: boolean
) => void;
export type BnFriendAccountOnlineEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_ACCOUNT_ONLINE",
    friendId: number,
    isCompanionApp: boolean
) => void;
export type BnFriendInfoChangedEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_INFO_CHANGED",
    friendIndex: number | undefined
) => void;
export type BnFriendInviteAddedEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_INVITE_ADDED",
    accountID: number
) => void;
export type BnFriendInviteListInitializedEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_INVITE_LIST_INITIALIZED",
    listSize: number
) => void;
export type BnFriendInviteRemovedEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_INVITE_REMOVED"
) => void;
export type BnFriendListSizeChangedEvent = (
    frame: UIFrame,
    e: "BN_FRIEND_LIST_SIZE_CHANGED",
    accountID: number | undefined
) => void;
export type BnInfoChangedEvent = (frame: UIFrame, e: "BN_INFO_CHANGED") => void;
export type BnRequestFofSucceededEvent = (
    frame: UIFrame,
    e: "BN_REQUEST_FOF_SUCCEEDED"
) => void;
export type FriendlistUpdateEvent = (
    frame: UIFrame,
    e: "FRIENDLIST_UPDATE"
) => void;
export type IgnorelistUpdateEvent = (
    frame: UIFrame,
    e: "IGNORELIST_UPDATE"
) => void;
export type MutelistUpdateEvent = (
    frame: UIFrame,
    e: "MUTELIST_UPDATE"
) => void;
export type WhoListUpdateEvent = (frame: UIFrame, e: "WHO_LIST_UPDATE") => void;
