import { UIFrame } from "../ui";

export const C_SummonInfo = {
    CancelSummon: (): void => {},
    ConfirmSummon: (): void => {},
    GetSummonConfirmAreaName: (): string => {return ''},
    GetSummonConfirmSummoner: (): string | undefined => {return ''},
    GetSummonConfirmTimeLeft: (): number => {return 0},
    GetSummonReason: (): number => {return 0},
    IsSummonSkippingStartExperience: (): boolean => {return false},
};
