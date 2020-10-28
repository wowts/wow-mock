import { UIFrame } from "../ui";
export const enum SummonStatus {
    None = 0,
    Pending = 1,
    Accepted = 2,
    Declined = 3
}
export const C_IncomingSummon = {
    HasIncomingSummon: (unit: string): boolean => {return false},
    IncomingSummonStatus: (unit: string): SummonStatus => {return SummonStatus.None},
};
