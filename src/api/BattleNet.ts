import {RafLinkType} from "./common";
import { UIFrame } from "../ui";
export interface BNetAccountInfo {
    bnetAccountID: number;
    accountName: string;
    battleTag: string;
    isFriend: boolean;
    isBattleTagFriend: boolean;
    lastOnlineTime: number;
    isAFK: boolean;
    isDND: boolean;
    isFavorite: boolean;
    appearOffline: boolean;
    customMessage: string;
    customMessageTime: number;
    note: string;
    rafLinkType: RafLinkType;
    gameAccountInfo: BNetGameAccountInfo
}
export interface BNetGameAccountInfo {
    gameAccountID: number | undefined;
    clientProgram: string;
    isOnline: boolean;
    isGameBusy: boolean;
    isGameAFK: boolean;
    wowProjectID: number | undefined;
    characterName: string | undefined;
    realmName: string | undefined;
    realmDisplayName: string | undefined;
    realmID: number | undefined;
    factionName: string | undefined;
    raceName: string | undefined;
    className: string | undefined;
    areaName: string | undefined;
    characterLevel: number | undefined;
    richPresence: string | undefined;
    playerGuid: string | undefined;
    isWowMobile: boolean;
    canSummon: boolean;
    hasFocus: boolean
}
export const C_BattleNet = {
    GetAccountInfoByGUID: (guid: string): BNetAccountInfo | undefined => {return {bnetAccountID: 0, accountName: '', battleTag: '', isFriend: false, isBattleTagFriend: false, lastOnlineTime: 0, isAFK: false, isDND: false, isFavorite: false, appearOffline: false, customMessage: '', customMessageTime: 0, note: '', rafLinkType: RafLinkType.None, gameAccountInfo: {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}}},
    GetAccountInfoByID: (id: number, wowAccountGUID: string | undefined): BNetAccountInfo | undefined => {return {bnetAccountID: 0, accountName: '', battleTag: '', isFriend: false, isBattleTagFriend: false, lastOnlineTime: 0, isAFK: false, isDND: false, isFavorite: false, appearOffline: false, customMessage: '', customMessageTime: 0, note: '', rafLinkType: RafLinkType.None, gameAccountInfo: {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}}},
    GetFriendAccountInfo: (friendIndex: number, wowAccountGUID: string | undefined): BNetAccountInfo | undefined => {return {bnetAccountID: 0, accountName: '', battleTag: '', isFriend: false, isBattleTagFriend: false, lastOnlineTime: 0, isAFK: false, isDND: false, isFavorite: false, appearOffline: false, customMessage: '', customMessageTime: 0, note: '', rafLinkType: RafLinkType.None, gameAccountInfo: {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}}},
    GetFriendGameAccountInfo: (friendIndex: number, accountIndex: number): BNetGameAccountInfo | undefined => {return {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}},
    GetFriendNumGameAccounts: (friendIndex: number): number => {return 0},
    GetGameAccountInfoByGUID: (guid: string): BNetGameAccountInfo | undefined => {return {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}},
    GetGameAccountInfoByID: (id: number): BNetGameAccountInfo | undefined => {return {gameAccountID: 0, clientProgram: '', isOnline: false, isGameBusy: false, isGameAFK: false, wowProjectID: 0, characterName: '', realmName: '', realmDisplayName: '', realmID: 0, factionName: '', raceName: '', className: '', areaName: '', characterLevel: 0, richPresence: '', playerGuid: '', isWowMobile: false, canSummon: false, hasFocus: false}},
};
