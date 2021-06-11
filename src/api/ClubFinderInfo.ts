import { GuildTabardInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ClubFinderApplicationUpdateType {
    None = 0,
    AcceptInvite = 1,
    DeclineInvite = 2,
    Cancel = 3,
}
export const enum ClubFinderClubPostingStatusFlags {
    None = 0,
    NeedsCacheUpdate = 1,
    ForceDescriptionChange = 2,
    ForceNameChange = 3,
    UnderReview = 4,
    Banned = 5,
    FakePost = 6,
    PendingDelete = 7,
    PostDelisted = 8,
}
export const enum ClubFinderDisableReason {
    Muted = 0,
    Silenced = 1,
    VeteranTrial = 2,
}
export const enum ClubFinderPostingReportType {
    PostersName = 0,
    ClubName = 1,
    PostingDescription = 2,
    ApplicantsName = 3,
    JoinNote = 4,
}
export const enum ClubFinderRequestType {
    None = 0,
    Guild = 1,
    Community = 2,
    All = 3,
}
export const enum ClubFinderSettingFlags {
    None = 0,
    Dungeons = 1,
    Raids = 2,
    PvP = 3,
    RP = 4,
    Social = 5,
    Small = 6,
    Medium = 7,
    Large = 8,
    Tank = 9,
    Healer = 10,
    Damage = 11,
    EnableListing = 12,
    MaxLevelOnly = 13,
    AutoAccept = 14,
    FactionHorde = 15,
    FactionAlliance = 16,
    FactionNeutral = 17,
    SortRelevance = 18,
    SortMemberCount = 19,
    SortNewest = 20,
    LanguageReserved1 = 21,
    LanguageReserved2 = 22,
    LanguageReserved3 = 23,
    LanguageReserved4 = 24,
    LanguageReserved5 = 25,
}
export const enum PlayerClubRequestStatus {
    None = 0,
    Pending = 1,
    AutoApproved = 2,
    Declined = 3,
    Approved = 4,
    Joined = 5,
    JoinedAnother = 6,
    Canceled = 7,
}
export interface ClubFinderApplicantInfo {
    clubFinderGUID: string;
    playerGUID: string;
    closed: number;
    name: string;
    message: string;
    level: number;
    classID: number;
    ilvl: number;
    specIds: LuaArray<number>;
    requestStatus: PlayerClubRequestStatus;
    lookupSuccess: boolean;
    lastUpdatedTime: number;
}
export interface ClubSettingsInfo {
    playStyleDungeon: boolean;
    playStyleRaids: boolean;
    playStylePvp: boolean;
    playStyleRP: boolean;
    playStyleSocial: boolean;
    roleTank: boolean;
    roleHealer: boolean;
    roleDps: boolean;
    sizeSmall: boolean;
    sizeMedium: boolean;
    sizeLarge: boolean;
    maxLevelOnly: boolean;
    enableListing: boolean;
    sortRelevance: boolean;
    sortMembers: boolean;
    sortNewest: boolean;
    autoAccept: boolean;
}
export interface RecruitingClubInfo {
    clubFinderGUID: string;
    numActiveMembers: number;
    name: string;
    comment: string;
    guildLeader: string;
    isGuild: boolean;
    emblemInfo: number;
    tabardInfo: GuildTabardInfo | undefined;
    recruitingSpecIds: LuaArray<number>;
    recruitmentFlags: number;
    localeSet: boolean;
    recruitmentLocale: number;
    minILvl: number;
    cached: number;
    cacheRequested: number;
    lastPosterGUID: string;
    clubId: string;
    lastUpdatedTime: number;
}
export const C_ClubFinder = {
    ApplicantAcceptClubInvite: (clubFinderGUID: string): void => {},
    ApplicantDeclineClubInvite: (clubFinderGUID: string): void => {},
    CancelMembershipRequest: (clubFinderGUID: string): void => {},
    CheckAllPlayerApplicantSettings: (): void => {},
    ClearAllFinderCache: (): void => {},
    ClearClubApplicantsCache: (): void => {},
    ClearClubFinderPostingsCache: (): void => {},
    DoesPlayerBelongToClubFromClubGUID: (clubFinderGUID: string): boolean => {
        return false;
    },
    GetClubFinderDisableReason: (): ClubFinderDisableReason | undefined => {
        return ClubFinderDisableReason.Muted;
    },
    GetClubRecruitmentSettings: (): ClubSettingsInfo => {
        return {
            playStyleDungeon: false,
            playStyleRaids: false,
            playStylePvp: false,
            playStyleRP: false,
            playStyleSocial: false,
            roleTank: false,
            roleHealer: false,
            roleDps: false,
            sizeSmall: false,
            sizeMedium: false,
            sizeLarge: false,
            maxLevelOnly: false,
            enableListing: false,
            sortRelevance: false,
            sortMembers: false,
            sortNewest: false,
            autoAccept: false,
        };
    },
    GetClubTypeFromFinderGUID: (
        clubFinderGUID: string
    ): ClubFinderRequestType => {
        return ClubFinderRequestType.None;
    },
    GetFocusIndexFromFlag: (flags: number): number => {
        return 0;
    },
    GetPlayerApplicantLocaleFlags: (): number => {
        return 0;
    },
    GetPlayerApplicantSettings: (): ClubSettingsInfo => {
        return {
            playStyleDungeon: false,
            playStyleRaids: false,
            playStylePvp: false,
            playStyleRP: false,
            playStyleSocial: false,
            roleTank: false,
            roleHealer: false,
            roleDps: false,
            sizeSmall: false,
            sizeMedium: false,
            sizeLarge: false,
            maxLevelOnly: false,
            enableListing: false,
            sortRelevance: false,
            sortMembers: false,
            sortNewest: false,
            autoAccept: false,
        };
    },
    GetPlayerClubApplicationStatus: (
        clubFinderGUID: string
    ): PlayerClubRequestStatus => {
        return PlayerClubRequestStatus.None;
    },
    GetPlayerSettingsFocusFlagsSelectedCount: (): number => {
        return 0;
    },
    GetPostingIDFromClubFinderGUID: (
        clubFinderGUID: string
    ): number | undefined => {
        return 0;
    },
    GetRecruitingClubInfoFromClubID: (
        clubId: string
    ): RecruitingClubInfo | undefined => {
        return {
            clubFinderGUID: "",
            numActiveMembers: 0,
            name: "",
            comment: "",
            guildLeader: "",
            isGuild: false,
            emblemInfo: 0,
            tabardInfo: {} as any,
            recruitingSpecIds: {} as any,
            recruitmentFlags: 0,
            localeSet: false,
            recruitmentLocale: 0,
            minILvl: 0,
            cached: 0,
            cacheRequested: 0,
            lastPosterGUID: "",
            clubId: "",
            lastUpdatedTime: 0,
        };
    },
    GetRecruitingClubInfoFromFinderGUID: (
        clubFinderGUID: string
    ): RecruitingClubInfo => {
        return {
            clubFinderGUID: "",
            numActiveMembers: 0,
            name: "",
            comment: "",
            guildLeader: "",
            isGuild: false,
            emblemInfo: 0,
            tabardInfo: {} as any,
            recruitingSpecIds: {} as any,
            recruitmentFlags: 0,
            localeSet: false,
            recruitmentLocale: 0,
            minILvl: 0,
            cached: 0,
            cacheRequested: 0,
            lastPosterGUID: "",
            clubId: "",
            lastUpdatedTime: 0,
        };
    },
    GetStatusOfPostingFromClubId: (
        postingID: string
    ): LuaArray<ClubFinderClubPostingStatusFlags> => {
        return {} as any;
    },
    GetTotalMatchingCommunityListSize: (): number => {
        return 0;
    },
    GetTotalMatchingGuildListSize: (): number => {
        return 0;
    },
    HasAlreadyAppliedToLinkedPosting: (clubFinderGUID: string): boolean => {
        return false;
    },
    HasPostingBeenDelisted: (postingID: string): boolean => {
        return false;
    },
    IsEnabled: (): boolean => {
        return false;
    },
    IsListingEnabledFromFlags: (flags: number): boolean => {
        return false;
    },
    IsPostingBanned: (postingID: string): boolean => {
        return false;
    },
    LookupClubPostingFromClubFinderGUID: (
        clubFinderGUID: string,
        isLinkedPosting: boolean
    ): void => {},
    PlayerGetClubInvitationList: (): LuaArray<RecruitingClubInfo> => {
        return {} as any;
    },
    PlayerRequestPendingClubsList: (type: ClubFinderRequestType): void => {},
    PlayerReturnPendingCommunitiesList: (): LuaArray<RecruitingClubInfo> => {
        return {} as any;
    },
    PlayerReturnPendingGuildsList: (): LuaArray<RecruitingClubInfo> => {
        return {} as any;
    },
    PostClub: (
        clubId: string,
        itemLevelRequirement: number,
        name: string,
        description: string,
        specs: LuaArray<number>,
        type: ClubFinderRequestType
    ): boolean => {
        return false;
    },
    ReportPosting: (
        reportType: ClubFinderPostingReportType,
        clubFinderGUID: string,
        playerGUID: string,
        complaintNote: string
    ): void => {},
    RequestApplicantList: (type: ClubFinderRequestType): void => {},
    RequestClubsList: (
        guildListRequested: boolean,
        searchString: string,
        specIDs: LuaArray<number>
    ): void => {},
    RequestMembershipToClub: (
        clubFinderGUID: string,
        comment: string,
        specIDs: LuaArray<number>
    ): void => {},
    RequestNextCommunityPage: (
        startingIndex: number,
        pageSize: number
    ): void => {},
    RequestNextGuildPage: (startingIndex: number, pageSize: number): void => {},
    RequestPostingInformationFromClubId: (clubId: string): boolean => {
        return false;
    },
    RequestSubscribedClubPostingIDs: (): void => {},
    ResetClubPostingMapCache: (): void => {},
    RespondToApplicant: (
        clubFinderGUID: string,
        playerGUID: string,
        shouldAccept: boolean,
        requestType: ClubFinderRequestType,
        playerName: string,
        forceAccept: boolean,
        reported: boolean | undefined
    ): void => {},
    ReturnClubApplicantList: (
        clubId: string
    ): LuaArray<ClubFinderApplicantInfo> => {
        return {} as any;
    },
    ReturnMatchingCommunityList: (): LuaArray<RecruitingClubInfo> => {
        return {} as any;
    },
    ReturnMatchingGuildList: (): LuaArray<RecruitingClubInfo> => {
        return {} as any;
    },
    ReturnPendingClubApplicantList: (
        clubId: string
    ): LuaArray<ClubFinderApplicantInfo> => {
        return {} as any;
    },
    SetAllRecruitmentSettings: (value: number): void => {},
    SetPlayerApplicantLocaleFlags: (localeFlags: number): void => {},
    SetPlayerApplicantSettings: (index: number, checked: boolean): void => {},
    SetRecruitmentLocale: (locale: number): void => {},
    SetRecruitmentSettings: (index: number, checked: boolean): void => {},
    ShouldShowClubFinder: (): boolean => {
        return false;
    },
};
export type ClubFinderApplicantInviteRecievedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_APPLICANT_INVITE_RECIEVED",
    clubFinderGUIDs: LuaArray<string>
) => void;
export type ClubFinderApplicationsUpdatedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_APPLICATIONS_UPDATED",
    type: ClubFinderRequestType,
    clubFinderGUIDs: LuaArray<string>
) => void;
export type ClubFinderClubListReturnedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_CLUB_LIST_RETURNED",
    type: ClubFinderRequestType
) => void;
export type ClubFinderClubReportedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_CLUB_REPORTED",
    type: ClubFinderRequestType,
    clubFinderGUID: string
) => void;
export type ClubFinderCommunityOfflineJoinEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_COMMUNITY_OFFLINE_JOIN",
    clubId: string
) => void;
export type ClubFinderEnabledOrDisabledEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_ENABLED_OR_DISABLED"
) => void;
export type ClubFinderLinkedClubReturnedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_LINKED_CLUB_RETURNED",
    clubInfo: RecruitingClubInfo
) => void;
export type ClubFinderMembershipListChangedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_MEMBERSHIP_LIST_CHANGED"
) => void;
export type ClubFinderPlayerPendingListRecievedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_PLAYER_PENDING_LIST_RECIEVED",
    type: ClubFinderRequestType
) => void;
export type ClubFinderPostUpdatedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_POST_UPDATED",
    clubFinderGUIDs: LuaArray<string>
) => void;
export type ClubFinderRecruitListChangedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_RECRUIT_LIST_CHANGED"
) => void;
export type ClubFinderRecruitmentPostReturnedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_RECRUITMENT_POST_RETURNED",
    type: ClubFinderRequestType
) => void;
export type ClubFinderRecruitsUpdatedEvent = (
    frame: UIFrame,
    e: "CLUB_FINDER_RECRUITS_UPDATED",
    type: ClubFinderRequestType
) => void;
