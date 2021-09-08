import { ContributionState } from "./common";
import { ColorMixin, Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ContributionAppearanceFlags {
    TooltipUseTimeRemaining = 0,
}
export const enum ContributionResult {
    Success = 0,
    MustBeNearNpc = 1,
    IncorrectState = 2,
    InvalidID = 3,
    QuestDataMissing = 4,
    FailedConditionCheck = 5,
    UnableToCompleteTurnIn = 6,
    InternalError = 7,
}
export interface ContributionAppearance {
    stateName: string;
    stateColor: ColorMixin;
    tooltipLine: string;
    tooltipUseTimeRemaining: boolean;
    statusBarAtlas: string;
    borderAtlas: string;
    bannerAtlas: string;
}
export interface ContributionMapInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    atlasName: string;
    collectorCreatureID: number;
}
export const C_ContributionCollector = {
    Close: (): void => {},
    Contribute: (contributionID: number): void => {},
    GetActive: (): number => {
        return 0;
    },
    GetAtlases: (contributionID: number): LuaArray<string> => {
        return {} as any;
    },
    GetBuffs: (contributionID: number): number => {
        return 0;
    },
    GetContributionAppearance: (
        contributionID: number,
        contributionState: ContributionState
    ): ContributionAppearance | undefined => {
        return {
            stateName: "",
            stateColor: {} as any,
            tooltipLine: "",
            tooltipUseTimeRemaining: false,
            statusBarAtlas: "",
            borderAtlas: "",
            bannerAtlas: "",
        };
    },
    GetContributionCollectorsForMap: (
        uiMapID: number
    ): LuaArray<ContributionMapInfo> => {
        return {} as any;
    },
    GetContributionResult: (contributionID: number): ContributionResult => {
        return ContributionResult.Success;
    },
    GetDescription: (contributionID: number): string => {
        return "";
    },
    GetManagedContributionsForCreatureID: (creatureID: number): number => {
        return 0;
    },
    GetName: (contributionID: number): string => {
        return "";
    },
    GetOrderIndex: (contributionID: number): number => {
        return 0;
    },
    GetRequiredContributionCurrency: (
        contributionID: number
    ): [currencyID: number, currencyAmount: number] => {
        return [0, 0];
    },
    GetRequiredContributionItem: (
        contributionID: number
    ): [itemID: number, itemCount: number] => {
        return [0, 0];
    },
    GetRewardQuestID: (contributionID: number): number => {
        return 0;
    },
    GetState: (
        contributionID: number
    ): [
        contributionState: ContributionState,
        contributionPercentageComplete: number,
        timeOfNextStateChange: number | undefined,
        startTime: number
    ] => {
        return [ContributionState.None, 0, 0, 0];
    },
    HasPendingContribution: (contributionID: number): boolean => {
        return false;
    },
    IsAwaitingRewardQuestData: (contributionID: number): boolean => {
        return false;
    },
};
export type ContributionChangedEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_CHANGED",
    state: ContributionState,
    result: ContributionResult,
    name: string,
    contributionID: number
) => void;
export type ContributionCollectorCloseEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_COLLECTOR_CLOSE"
) => void;
export type ContributionCollectorOpenEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_COLLECTOR_OPEN"
) => void;
export type ContributionCollectorPendingEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_COLLECTOR_PENDING",
    contributionID: number,
    isPending: boolean,
    result: number
) => void;
export type ContributionCollectorUpdateEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_COLLECTOR_UPDATE"
) => void;
export type ContributionCollectorUpdateSingleEvent = (
    frame: UIFrame,
    e: "CONTRIBUTION_COLLECTOR_UPDATE_SINGLE",
    contributionID: number
) => void;
