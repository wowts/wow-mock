import { CalendarTime } from '../mixins';
import { UIFrame } from "../ui";

export const C_DateAndTime = {
    AdjustTimeByDays: (date: CalendarTime, days: number): CalendarTime => {return {} as any},
    AdjustTimeByMinutes: (date: CalendarTime, minutes: number): CalendarTime => {return {} as any},
    CompareCalendarTime: (lhsCalendarTime: CalendarTime, rhsCalendarTime: CalendarTime): number => {return 0},
    GetCalendarTimeFromEpoch: (epoch: number): CalendarTime => {return {} as any},
    GetCurrentCalendarTime: (): CalendarTime => {return {} as any},
    GetSecondsUntilDailyReset: (): number => {return 0},
    GetSecondsUntilWeeklyReset: (): number => {return 0},
    GetServerTimeLocal: (): number => {return 0},
};
