import {GarrTalentFeatureSubtype} from "./common";
import { UIFrame } from "../ui";
export interface CovenantSanctumFeatureInfo {
    garrTalentTreeID: number;
    featureType: number;
    uiOrder: number
}
export interface CovenantSanctumRenownLevelInfo {
    level: number;
    locked: boolean;
    isMilestone: boolean;
    isCapstone: boolean
}
export interface CovenantSanctumRenownRewardInfo {
    uiOrder: number;
    itemID: number | undefined;
    spellID: number | undefined;
    mountID: number | undefined;
    transmogID: number | undefined;
    transmogSetID: number | undefined;
    titleMaskID: number | undefined;
    garrFollowerID: number | undefined;
    transmogIllusionSourceID: number | undefined;
    icon: number | undefined;
    name: string | undefined;
    description: string | undefined;
    toastDescription: string | undefined
}
export const C_CovenantSanctumUI = {
    CanAccessReservoir: (): boolean => {return false},
    CanDepositAnima: (): boolean => {return false},
    DepositAnima: (): void => {},
    EndInteraction: (): void => {},
    GetAnimaInfo: (): [currencyID: number, maxDisplayableValue: number] => {return [0, 0]},
    GetCurrentTalentTreeID: (): number | undefined => {return 0},
    GetFeatures: (): any => {return {} as any},
    GetRenownLevel: (): number => {return 0},
    GetRenownLevels: (covenantID: number): any => {return {} as any},
    GetRenownRewardsForLevel: (covenantID: number, renownLevel: number): any => {return {} as any},
    GetSanctumType: (): GarrTalentFeatureSubtype | undefined => {return GarrTalentFeatureSubtype.Generic},
    GetSoulCurrencies: (): any => {return {} as any},
};
export type CovenantRenownInteractionEndedEvent = (frame: UIFrame, e: "COVENANT_RENOWN_INTERACTION_ENDED") => void
export type CovenantRenownInteractionStartedEvent = (frame: UIFrame, e: "COVENANT_RENOWN_INTERACTION_STARTED") => void
export type CovenantSanctumInteractionEndedEvent = (frame: UIFrame, e: "COVENANT_SANCTUM_INTERACTION_ENDED") => void
export type CovenantSanctumInteractionStartedEvent = (frame: UIFrame, e: "COVENANT_SANCTUM_INTERACTION_STARTED") => void
export type CovenantSanctumRenownLevelChangedEvent = (frame: UIFrame, e: "COVENANT_SANCTUM_RENOWN_LEVEL_CHANGED", newRenownLevel: number, oldRenownLevel: number) => void