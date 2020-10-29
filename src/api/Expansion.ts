import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum SubscriptionInterstitialResponseType {
    Clicked = 0,
    Closed = 1,
    WebRedirect = 2
}
export const enum SubscriptionInterstitialType {
    Standard = 0,
    LeftNpeArea = 1,
    MaxLevel = 2
}
export interface ExpansionDisplayInfo {
    logo: number;
    banner: string;
    features: LuaArray<ExpansionDisplayInfoFeature>
}
export interface ExpansionDisplayInfoFeature {
    icon: number;
    text: string
}
export function CanUpgradeExpansion(): boolean {return false}
export function DoesCurrentLocaleSellExpansionLevels(): boolean {return false}
export function GetAccountExpansionLevel(): number {return 0}
export function GetClientDisplayExpansionLevel(): number {return 0}
export function GetCurrentRegionName(): string {return ''}
export function GetExpansionDisplayInfo(expansionLevel: number): ExpansionDisplayInfo | undefined {return {logo: 0, banner: '', features: {} as any}}
export function GetExpansionForLevel(playerLevel: number): number {return 0}
export function GetExpansionLevel(): number {return 0}
export function GetExpansionTrialInfo(): [isExpansionTrialAccount: boolean, expansionTrialRemainingSeconds: number | undefined] {return [false, 0]}
export function GetMaxLevelForExpansionLevel(expansionLevel: number): number {return 0}
export function GetMaxLevelForLatestExpansion(): number {return 0}
export function GetMaxLevelForPlayerExpansion(): number {return 0}
export function GetMaximumExpansionLevel(): number {return 0}
export function GetMinimumExpansionLevel(): number {return 0}
export function GetNumExpansions(): number {return 0}
export function GetServerExpansionLevel(): number {return 0}
export function IsExpansionTrial(): boolean {return false}
export function IsTrialAccount(): boolean {return false}
export function IsVeteranTrialAccount(): boolean {return false}
export function SendSubscriptionInterstitialResponse(response: SubscriptionInterstitialResponseType): void {}export type MaxExpansionLevelUpdatedEvent = (frame: UIFrame, e: "MAX_EXPANSION_LEVEL_UPDATED") => void
export type MinExpansionLevelUpdatedEvent = (frame: UIFrame, e: "MIN_EXPANSION_LEVEL_UPDATED") => void
export type ShowSubscriptionInterstitialEvent = (frame: UIFrame, e: "SHOW_SUBSCRIPTION_INTERSTITIAL", type: SubscriptionInterstitialType) => void