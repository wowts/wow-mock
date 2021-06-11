import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface IslandsQueueDifficultyInfo {
    difficultyId: number;
    previewRewardQuestId: number;
}
export const C_IslandsQueue = {
    CloseIslandsQueueScreen: (): void => {},
    GetIslandDifficultyInfo: (): LuaArray<IslandsQueueDifficultyInfo> => {
        return {} as any;
    },
    GetIslandsMaxGroupSize: (): number => {
        return 0;
    },
    GetIslandsWeeklyQuestID: (): number | undefined => {
        return 0;
    },
    QueueForIsland: (difficultyID: number): void => {},
    RequestPreloadRewardData: (questId: number): void => {},
};
export type IslandsQueueCloseEvent = (
    frame: UIFrame,
    e: "ISLANDS_QUEUE_CLOSE"
) => void;
export type IslandsQueueOpenEvent = (
    frame: UIFrame,
    e: "ISLANDS_QUEUE_OPEN"
) => void;
