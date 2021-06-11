import { UIFrame } from "../ui";

export const C_Reputation = {
    GetFactionParagonInfo: (
        factionID: number
    ): [
        currentValue: number,
        threshold: number,
        rewardQuestID: number,
        hasRewardPending: boolean,
        tooLowLevelForParagon: boolean
    ] => {
        return [0, 0, 0, false, false];
    },
    IsFactionParagon: (factionID: number): boolean => {
        return false;
    },
    RequestFactionParagonPreloadRewardData: (factionID: number): void => {},
};
