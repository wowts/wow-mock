import { CalendarEventType, CalendarStatus } from "./common";
import { CalendarTime } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface CalendarDayEvent {
    eventID: string;
    title: string;
    isCustomTitle: boolean;
    startTime: CalendarTime;
    endTime: CalendarTime;
    calendarType: string;
    sequenceType: string;
    eventType: CalendarEventType;
    iconTexture: number | undefined;
    modStatus: string;
    inviteStatus: number;
    invitedBy: string;
    difficulty: number;
    inviteType: number;
    sequenceIndex: number;
    numSequenceDays: number;
    difficultyName: string;
    dontDisplayBanner: boolean;
    dontDisplayEnd: boolean;
    clubID: string;
    isLocked: boolean;
}
export interface CalendarEventIndexInfo {
    offsetMonths: number;
    monthDay: number;
    eventIndex: number;
}
export interface CalendarEventInfo {
    title: string;
    description: string;
    creator: string | undefined;
    eventType: CalendarEventType;
    repeatOption: number;
    maxSize: number;
    textureIndex: number | undefined;
    time: CalendarTime;
    lockoutTime: CalendarTime;
    isLocked: boolean;
    isAutoApprove: boolean;
    hasPendingInvite: boolean;
    inviteStatus: number | undefined;
    inviteType: number | undefined;
    calendarType: string;
    communityName: string | undefined;
}
export interface CalendarEventInviteInfo {
    name: string | undefined;
    level: number;
    className: string | undefined;
    classFilename: string | undefined;
    inviteStatus: number | undefined;
    modStatus: string | undefined;
    inviteIsMine: boolean;
    type: number;
    notes: string;
    classID: number | undefined;
    guid: string;
}
export interface CalendarEventStatusOption {
    status: CalendarStatus;
    statusString: string;
}
export interface CalendarEventTextureInfo {
    title: string;
    iconTexture: number;
    expansionLevel: number;
    difficultyId: number | undefined;
    mapId: number | undefined;
    isLfr: boolean | undefined;
}
export interface CalendarEventTypeDisplayInfo {
    displayString: string;
    eventType: CalendarEventType;
}
export interface CalendarGuildEventInfo {
    eventID: string;
    year: number;
    month: number;
    monthDay: number;
    weekday: number;
    hour: number;
    minute: number;
    eventType: CalendarEventType;
    title: string;
    calendarType: string;
    texture: number;
    inviteStatus: number;
    clubID: string;
}
export interface CalendarGuildFilterInfo {
    minLevel: number;
    maxLevel: number;
    rank: number;
}
export interface CalendarHolidayInfo {
    name: string;
    description: string;
    texture: number;
    startTime: CalendarTime | undefined;
    endTime: CalendarTime | undefined;
}
export interface CalendarMonthInfo {
    month: number;
    year: number;
    numDays: number;
    firstWeekday: number;
}
export interface CalendarRaidInfo {
    name: string;
    calendarType: string;
    raidID: number;
    time: CalendarTime;
    difficulty: number;
    difficultyName: string | undefined;
}
export const C_Calendar = {
    AddEvent: (): void => {},
    AreNamesReady: (): boolean => {
        return false;
    },
    CanAddEvent: (): boolean => {
        return false;
    },
    CanSendInvite: (): boolean => {
        return false;
    },
    CloseEvent: (): void => {},
    ContextMenuEventCanComplain: (
        offsetMonths: number,
        monthDay: number,
        eventIndex: number
    ): boolean => {
        return false;
    },
    ContextMenuEventCanEdit: (
        offsetMonths: number,
        monthDay: number,
        eventIndex: number
    ): boolean => {
        return false;
    },
    ContextMenuEventCanRemove: (
        offsetMonths: number,
        monthDay: number,
        eventIndex: number
    ): boolean => {
        return false;
    },
    ContextMenuEventClipboard: (): boolean => {
        return false;
    },
    ContextMenuEventComplain: (): void => {},
    ContextMenuEventCopy: (): void => {},
    ContextMenuEventGetCalendarType: (): string | undefined => {
        return "";
    },
    ContextMenuEventPaste: (offsetMonths: number, monthDay: number): void => {},
    ContextMenuEventRemove: (): void => {},
    ContextMenuEventSignUp: (): void => {},
    ContextMenuGetEventIndex: (): CalendarEventIndexInfo => {
        return { offsetMonths: 0, monthDay: 0, eventIndex: 0 };
    },
    ContextMenuInviteAvailable: (): void => {},
    ContextMenuInviteDecline: (): void => {},
    ContextMenuInviteRemove: (): void => {},
    ContextMenuInviteTentative: (): void => {},
    ContextMenuSelectEvent: (
        offsetMonths: number,
        monthDay: number,
        eventIndex: number
    ): void => {},
    CreateCommunitySignUpEvent: (): void => {},
    CreateGuildAnnouncementEvent: (): void => {},
    CreateGuildSignUpEvent: (): void => {},
    CreatePlayerEvent: (): void => {},
    EventAvailable: (): void => {},
    EventCanEdit: (): boolean => {
        return false;
    },
    EventClearAutoApprove: (): void => {},
    EventClearLocked: (): void => {},
    EventClearModerator: (inviteIndex: number): void => {},
    EventDecline: (): void => {},
    EventGetCalendarType: (): string | undefined => {
        return "";
    },
    EventGetClubId: (): string | undefined => {
        return "";
    },
    EventGetInvite: (eventIndex: number): CalendarEventInviteInfo => {
        return {
            name: "",
            level: 0,
            className: "",
            classFilename: "",
            inviteStatus: 0,
            modStatus: "",
            inviteIsMine: false,
            type: 0,
            notes: "",
            classID: 0,
            guid: "",
        };
    },
    EventGetInviteResponseTime: (eventIndex: number): CalendarTime => {
        return {} as any;
    },
    EventGetInviteSortCriterion: (): [criterion: string, reverse: boolean] => {
        return ["", false];
    },
    EventGetSelectedInvite: (): number | undefined => {
        return 0;
    },
    EventGetStatusOptions: (
        eventIndex: number
    ): LuaArray<CalendarEventStatusOption> => {
        return {} as any;
    },
    EventGetTextures: (
        eventType: CalendarEventType
    ): LuaArray<CalendarEventTextureInfo> => {
        return {} as any;
    },
    EventGetTypes: (): LuaArray<string> => {
        return {} as any;
    },
    EventGetTypesDisplayOrdered: (): LuaArray<CalendarEventTypeDisplayInfo> => {
        return {} as any;
    },
    EventHasPendingInvite: (): boolean => {
        return false;
    },
    EventHaveSettingsChanged: (): boolean => {
        return false;
    },
    EventInvite: (name: string): void => {},
    EventRemoveInvite: (inviteIndex: number): void => {},
    EventRemoveInviteByGuid: (guid: string): void => {},
    EventSelectInvite: (inviteIndex: number): void => {},
    EventSetAutoApprove: (): void => {},
    EventSetClubId: (clubId: string | undefined): void => {},
    EventSetDate: (month: number, monthDay: number, year: number): void => {},
    EventSetDescription: (description: string): void => {},
    EventSetInviteStatus: (
        eventIndex: number,
        status: CalendarStatus
    ): void => {},
    EventSetLocked: (): void => {},
    EventSetModerator: (inviteIndex: number): void => {},
    EventSetTextureID: (textureIndex: number): void => {},
    EventSetTime: (hour: number, minute: number): void => {},
    EventSetTitle: (title: string): void => {},
    EventSetType: (typeIndex: CalendarEventType): void => {},
    EventSignUp: (): void => {},
    EventSortInvites: (criterion: string, reverse: boolean): void => {},
    EventTentative: (): void => {},
    GetClubCalendarEvents: (
        clubId: string,
        startTime: CalendarTime,
        endTime: CalendarTime
    ): LuaArray<CalendarDayEvent> => {
        return {} as any;
    },
    GetDayEvent: (
        monthOffset: number,
        monthDay: number,
        index: number
    ): CalendarDayEvent => {
        return {
            eventID: "",
            title: "",
            isCustomTitle: false,
            startTime: {} as any,
            endTime: {} as any,
            calendarType: "",
            sequenceType: "",
            eventType: CalendarEventType.Raid,
            iconTexture: 0,
            modStatus: "",
            inviteStatus: 0,
            invitedBy: "",
            difficulty: 0,
            inviteType: 0,
            sequenceIndex: 0,
            numSequenceDays: 0,
            difficultyName: "",
            dontDisplayBanner: false,
            dontDisplayEnd: false,
            clubID: "",
            isLocked: false,
        };
    },
    GetDefaultGuildFilter: (): CalendarGuildFilterInfo => {
        return { minLevel: 0, maxLevel: 0, rank: 0 };
    },
    GetEventIndex: (): CalendarEventIndexInfo => {
        return { offsetMonths: 0, monthDay: 0, eventIndex: 0 };
    },
    GetEventIndexInfo: (
        eventID: string,
        monthOffset: number | undefined,
        monthDay: number | undefined
    ): CalendarEventIndexInfo | undefined => {
        return { offsetMonths: 0, monthDay: 0, eventIndex: 0 };
    },
    GetEventInfo: (): CalendarEventInfo => {
        return {
            title: "",
            description: "",
            creator: "",
            eventType: CalendarEventType.Raid,
            repeatOption: 0,
            maxSize: 0,
            textureIndex: 0,
            time: {} as any,
            lockoutTime: {} as any,
            isLocked: false,
            isAutoApprove: false,
            hasPendingInvite: false,
            inviteStatus: 0,
            inviteType: 0,
            calendarType: "",
            communityName: "",
        };
    },
    GetFirstPendingInvite: (
        offsetMonths: number,
        monthDay: number
    ): number | undefined => {
        return 0;
    },
    GetGuildEventInfo: (index: number): CalendarGuildEventInfo => {
        return {
            eventID: "",
            year: 0,
            month: 0,
            monthDay: 0,
            weekday: 0,
            hour: 0,
            minute: 0,
            eventType: CalendarEventType.Raid,
            title: "",
            calendarType: "",
            texture: 0,
            inviteStatus: 0,
            clubID: "",
        };
    },
    GetGuildEventSelectionInfo: (index: number): CalendarEventIndexInfo => {
        return { offsetMonths: 0, monthDay: 0, eventIndex: 0 };
    },
    GetHolidayInfo: (
        monthOffset: number,
        monthDay: number,
        index: number
    ): CalendarHolidayInfo => {
        return {
            name: "",
            description: "",
            texture: 0,
            startTime: {} as any,
            endTime: {} as any,
        };
    },
    GetMaxCreateDate: (): CalendarTime => {
        return {} as any;
    },
    GetMinDate: (): CalendarTime => {
        return {} as any;
    },
    GetMonthInfo: (offsetMonths: number): CalendarMonthInfo => {
        return { month: 0, year: 0, numDays: 0, firstWeekday: 0 };
    },
    GetNextClubId: (): string | undefined => {
        return "";
    },
    GetNumDayEvents: (offsetMonths: number, monthDay: number): number => {
        return 0;
    },
    GetNumGuildEvents: (): number => {
        return 0;
    },
    GetNumInvites: (): number => {
        return 0;
    },
    GetNumPendingInvites: (): number => {
        return 0;
    },
    GetRaidInfo: (
        offsetMonths: number,
        monthDay: number,
        eventIndex: number
    ): CalendarRaidInfo => {
        return {
            name: "",
            calendarType: "",
            raidID: 0,
            time: {} as any,
            difficulty: 0,
            difficultyName: "",
        };
    },
    IsActionPending: (): boolean => {
        return false;
    },
    IsEventOpen: (): boolean => {
        return false;
    },
    MassInviteCommunity: (
        clubId: string,
        minLevel: number,
        maxLevel: number,
        maxRankOrder: number | undefined
    ): void => {},
    MassInviteGuild: (
        minLevel: number,
        maxLevel: number,
        maxRankOrder: number
    ): void => {},
    OpenCalendar: (): void => {},
    OpenEvent: (
        offsetMonths: number,
        monthDay: number,
        index: number
    ): boolean => {
        return false;
    },
    RemoveEvent: (): void => {},
    SetAbsMonth: (month: number, year: number): void => {},
    SetMonth: (offsetMonths: number): void => {},
    SetNextClubId: (clubId: string | undefined): void => {},
    UpdateEvent: (): void => {},
};
export type CalendarActionPendingEvent = (
    frame: UIFrame,
    e: "CALENDAR_ACTION_PENDING",
    pending: boolean
) => void;
export type CalendarCloseEventEvent = (
    frame: UIFrame,
    e: "CALENDAR_CLOSE_EVENT"
) => void;
export type CalendarEventAlarmEvent = (
    frame: UIFrame,
    e: "CALENDAR_EVENT_ALARM",
    title: string,
    hour: number,
    minute: number
) => void;
export type CalendarNewEventEvent = (
    frame: UIFrame,
    e: "CALENDAR_NEW_EVENT",
    isCopy: boolean
) => void;
export type CalendarOpenEventEvent = (
    frame: UIFrame,
    e: "CALENDAR_OPEN_EVENT",
    calendarType: string
) => void;
export type CalendarUpdateErrorEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_ERROR",
    errorReason: string
) => void;
export type CalendarUpdateErrorWithCountEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_ERROR_WITH_COUNT",
    errorReason: string,
    count: number
) => void;
export type CalendarUpdateErrorWithPlayerNameEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_ERROR_WITH_PLAYER_NAME",
    errorReason: string,
    playerName: string
) => void;
export type CalendarUpdateEventEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_EVENT"
) => void;
export type CalendarUpdateEventListEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_EVENT_LIST"
) => void;
export type CalendarUpdateGuildEventsEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_GUILD_EVENTS"
) => void;
export type CalendarUpdateInviteListEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_INVITE_LIST",
    hasCompleteList: boolean | undefined
) => void;
export type CalendarUpdatePendingInvitesEvent = (
    frame: UIFrame,
    e: "CALENDAR_UPDATE_PENDING_INVITES"
) => void;
