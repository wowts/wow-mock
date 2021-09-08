import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface BestDungeonScoreMapInfo {
    mapScore: number;
    mapName: string;
    bestRunLevel: number;
    finishedSuccess: boolean;
}
export interface LfgApplicantData {
    applicantID: number;
    applicationStatus: string;
    pendingApplicationStatus: string | undefined;
    numMembers: number;
    isNew: boolean;
    comment: string;
    displayOrderID: number;
}
export interface LfgEntryData {
    activityID: number;
    requiredItemLevel: number;
    requiredHonorLevel: number;
    name: string;
    comment: string;
    voiceChat: string;
    duration: number;
    autoAccept: boolean;
    privateGroup: boolean;
    questID: number | undefined;
}
export interface LfgSearchResultData {
    searchResultID: number;
    activityID: number;
    leaderName: string | undefined;
    name: string;
    comment: string;
    voiceChat: string;
    requiredItemLevel: number;
    requiredHonorLevel: number;
    numMembers: number;
    numBNetFriends: number;
    numCharFriends: number;
    numGuildMates: number;
    isDelisted: boolean;
    autoAccept: boolean;
    isWarMode: boolean;
    age: number;
    questID: number | undefined;
    leaderOverallDungeonScore: number | undefined;
    leaderDungeonScoreInfo: BestDungeonScoreMapInfo | undefined;
}
export interface WowLocale {
    enUS: boolean;
    koKR: boolean;
    frFR: boolean;
    deDE: boolean;
    zhCN: boolean;
    zhTW: boolean;
    esES: boolean;
    esMX: boolean;
    ruRU: boolean;
    ptBR: boolean;
    itIT: boolean;
}
export const C_LFGList = {
    CanActiveEntryUseAutoAccept: (): boolean => {
        return false;
    },
    CanCreateQuestGroup: (questID: number): boolean => {
        return false;
    },
    ClearApplicationTextFields: (): void => {},
    ClearCreationTextFields: (): void => {},
    ClearSearchTextFields: (): void => {},
    CopyActiveEntryInfoToCreationFields: (): void => {},
    GetActiveEntryInfo: (): LfgEntryData => {
        return {
            activityID: 0,
            requiredItemLevel: 0,
            requiredHonorLevel: 0,
            name: "",
            comment: "",
            voiceChat: "",
            duration: 0,
            autoAccept: false,
            privateGroup: false,
            questID: 0,
        };
    },
    GetApplicantDungeonScoreForListing: (
        localID: number,
        applicantIndex: number,
        activityID: number
    ): BestDungeonScoreMapInfo => {
        return {
            mapScore: 0,
            mapName: "",
            bestRunLevel: 0,
            finishedSuccess: false,
        };
    },
    GetApplicantInfo: (applicantID: number): LfgApplicantData => {
        return {
            applicantID: 0,
            applicationStatus: "",
            pendingApplicationStatus: "",
            numMembers: 0,
            isNew: false,
            comment: "",
            displayOrderID: 0,
        };
    },
    GetFilteredSearchResults: (): [
        totalResultsFound: number,
        filteredResults: LuaArray<number>
    ] => {
        return [0, {} as any];
    },
    GetSearchResultInfo: (searchResultID: number): LfgSearchResultData => {
        return {
            searchResultID: 0,
            activityID: 0,
            leaderName: "",
            name: "",
            comment: "",
            voiceChat: "",
            requiredItemLevel: 0,
            requiredHonorLevel: 0,
            numMembers: 0,
            numBNetFriends: 0,
            numCharFriends: 0,
            numGuildMates: 0,
            isDelisted: false,
            autoAccept: false,
            isWarMode: false,
            age: 0,
            questID: 0,
            leaderOverallDungeonScore: 0,
            leaderDungeonScoreInfo: {
                mapScore: 0,
                mapName: "",
                bestRunLevel: 0,
                finishedSuccess: false,
            },
        };
    },
    GetSearchResults: (): [
        totalResultsFound: number,
        results: LuaArray<number>
    ] => {
        return [0, {} as any];
    },
    HasActiveEntryInfo: (): boolean => {
        return false;
    },
    HasSearchResultInfo: (searchResultID: number): boolean => {
        return false;
    },
    Search: (
        categoryID: number,
        filter: number,
        preferredFilters: number,
        languageFilter: WowLocale | undefined
    ): void => {},
    SetSearchToActivity: (activityID: number): void => {},
    SetSearchToQuestID: (questID: number): void => {},
};
export type LfgGroupDelistedLeadershipChangeEvent = (
    frame: UIFrame,
    e: "LFG_GROUP_DELISTED_LEADERSHIP_CHANGE",
    listingName: string,
    automaticDelistTimeRemaining: number
) => void;
export type LfgListActiveEntryUpdateEvent = (
    frame: UIFrame,
    e: "LFG_LIST_ACTIVE_ENTRY_UPDATE",
    created: boolean | undefined
) => void;
export type LfgListApplicantListUpdatedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_APPLICANT_LIST_UPDATED",
    newPendingEntry: boolean | undefined,
    newPendingEntryWithData: boolean | undefined
) => void;
export type LfgListApplicantUpdatedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_APPLICANT_UPDATED",
    applicantID: number
) => void;
export type LfgListApplicationStatusUpdatedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_APPLICATION_STATUS_UPDATED",
    searchResultID: number,
    newStatus: string,
    oldStatus: string,
    groupName: string
) => void;
export type LfgListAvailabilityUpdateEvent = (
    frame: UIFrame,
    e: "LFG_LIST_AVAILABILITY_UPDATE"
) => void;
export type LfgListEntryCreationFailedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_ENTRY_CREATION_FAILED"
) => void;
export type LfgListEntryExpiredTimeoutEvent = (
    frame: UIFrame,
    e: "LFG_LIST_ENTRY_EXPIRED_TIMEOUT"
) => void;
export type LfgListEntryExpiredTooManyPlayersEvent = (
    frame: UIFrame,
    e: "LFG_LIST_ENTRY_EXPIRED_TOO_MANY_PLAYERS"
) => void;
export type LfgListJoinedGroupEvent = (
    frame: UIFrame,
    e: "LFG_LIST_JOINED_GROUP",
    searchResultID: number,
    groupName: string
) => void;
export type LfgListSearchFailedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_SEARCH_FAILED",
    reason: string | undefined
) => void;
export type LfgListSearchResultUpdatedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_SEARCH_RESULT_UPDATED",
    searchResultID: number
) => void;
export type LfgListSearchResultsReceivedEvent = (
    frame: UIFrame,
    e: "LFG_LIST_SEARCH_RESULTS_RECEIVED"
) => void;
