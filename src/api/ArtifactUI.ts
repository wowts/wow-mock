import { ColorMixin, Vector2DMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface ArtifactArtInfo {
    textureKit: string;
    titleName: string;
    titleColor: ColorMixin;
    barConnectedColor: ColorMixin;
    barDisconnectedColor: ColorMixin;
    uiModelSceneID: number;
    spellVisualKitID: number
}
export interface ArtifactPowerInfo {
    spellID: number;
    cost: number;
    currentRank: number;
    maxRank: number;
    bonusRanks: number;
    numMaxRankBonusFromTier: number;
    prereqsMet: boolean;
    isStart: boolean;
    isGoldMedal: boolean;
    isFinal: boolean;
    tier: number;
    position: Vector2DMixin;
    offset: Vector2DMixin | undefined;
    linearIndex: number | undefined
}
export const C_ArtifactUI = {
    AddPower: (powerID: number): boolean => {return false},
    ApplyCursorRelicToSlot: (relicSlotIndex: number): void => {},
    CanApplyArtifactRelic: (relicItemID: number, onlyUnlocked: boolean): boolean => {return false},
    CanApplyCursorRelicToSlot: (relicSlotIndex: number): boolean => {return false},
    CanApplyRelicItemIDToEquippedArtifactSlot: (relicItemID: number, relicSlotIndex: number): boolean => {return false},
    CanApplyRelicItemIDToSlot: (relicItemID: number, relicSlotIndex: number): boolean => {return false},
    CheckRespecNPC: (): boolean => {return false},
    Clear: (): void => {},
    ClearForgeCamera: (): void => {},
    ConfirmRespec: (): void => {},
    DoesEquippedArtifactHaveAnyRelicsSlotted: (): boolean => {return false},
    GetAppearanceInfo: (appearanceSetIndex: number, appearanceIndex: number): [artifactAppearanceID: number, appearanceName: string, displayIndex: number, unlocked: boolean, failureDescription: string | undefined, uiCameraID: number, altHandCameraID: number | undefined, swatchColorR: number, swatchColorG: number, swatchColorB: number, modelOpacity: number, modelSaturation: number, obtainable: boolean] => {return [0, '', 0, false, '', 0, 0, 0, 0, 0, 0, 0, false]},
    GetAppearanceInfoByID: (artifactAppearanceID: number): [artifactAppearanceSetID: number, artifactAppearanceID: number, appearanceName: string, displayIndex: number, unlocked: boolean, failureDescription: string | undefined, uiCameraID: number, altHandCameraID: number | undefined, swatchColorR: number, swatchColorG: number, swatchColorB: number, modelOpacity: number, modelSaturation: number, obtainable: boolean] => {return [0, 0, '', 0, false, '', 0, 0, 0, 0, 0, 0, 0, false]},
    GetAppearanceSetInfo: (appearanceSetIndex: number): [artifactAppearanceSetID: number, appearanceSetName: string, appearanceSetDescription: string, numAppearances: number] => {return [0, '', '', 0]},
    GetArtifactArtInfo: (): ArtifactArtInfo => {return {textureKit: '', titleName: '', titleColor: {} as any, barConnectedColor: {} as any, barDisconnectedColor: {} as any, uiModelSceneID: 0, spellVisualKitID: 0}},
    GetArtifactInfo: (): [itemID: number, altItemID: number | undefined, name: string, icon: number, xp: number, pointsSpent: number, quality: number, artifactAppearanceID: number, appearanceModID: number, itemAppearanceID: number | undefined, altItemAppearanceID: number | undefined, altOnTop: boolean, tier: number] => {return [0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, false, 0]},
    GetArtifactItemID: (): number => {return 0},
    GetArtifactTier: (): number | undefined => {return 0},
    GetArtifactXPRewardTargetInfo: (artifactCategoryID: number): [name: string, icon: number] => {return ['', 0]},
    GetCostForPointAtRank: (rank: number, tier: number): number => {return 0},
    GetEquippedArtifactArtInfo: (): ArtifactArtInfo => {return {textureKit: '', titleName: '', titleColor: {} as any, barConnectedColor: {} as any, barDisconnectedColor: {} as any, uiModelSceneID: 0, spellVisualKitID: 0}},
    GetEquippedArtifactInfo: (): [itemID: number, altItemID: number | undefined, name: string, icon: number, xp: number, pointsSpent: number, quality: number, artifactAppearanceID: number, appearanceModID: number, itemAppearanceID: number | undefined, altItemAppearanceID: number | undefined, altOnTop: boolean, tier: number] => {return [0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, false, 0]},
    GetEquippedArtifactItemID: (): number => {return 0},
    GetEquippedArtifactNumRelicSlots: (onlyUnlocked: boolean): number => {return 0},
    GetEquippedArtifactRelicInfo: (relicSlotIndex: number): [name: string, icon: number, slotTypeName: string, link: string] => {return ['', 0, '', '']},
    GetEquippedRelicLockedReason: (relicSlotIndex: number): string | undefined => {return ''},
    GetForgeRotation: (): [forgeRotationX: number, forgeRotationY: number, forgeRotationZ: number] => {return [0, 0, 0]},
    GetItemLevelIncreaseProvidedByRelic: (itemLinkOrID: string): number => {return 0},
    GetMetaPowerInfo: (): [spellID: number, powerCost: number, currentRank: number] => {return [0, 0, 0]},
    GetNumAppearanceSets: (): number => {return 0},
    GetNumObtainedArtifacts: (): number => {return 0},
    GetNumRelicSlots: (onlyUnlocked: boolean): number => {return 0},
    GetPointsRemaining: (): number => {return 0},
    GetPowerHyperlink: (powerID: number): string => {return ''},
    GetPowerInfo: (powerID: number): ArtifactPowerInfo => {return {spellID: 0, cost: 0, currentRank: 0, maxRank: 0, bonusRanks: 0, numMaxRankBonusFromTier: 0, prereqsMet: false, isStart: false, isGoldMedal: false, isFinal: false, tier: 0, position: {} as any, offset: {} as any, linearIndex: 0}},
    GetPowerLinks: (powerID: number): LuaArray<number> => {return {} as any},
    GetPowers: (): LuaArray<number> => {return {} as any},
    GetPowersAffectedByRelic: (relicSlotIndex: number): number => {return 0},
    GetPowersAffectedByRelicItemLink: (relicItemInfo: string): number => {return 0},
    GetPreviewAppearance: (): number | undefined => {return 0},
    GetRelicInfo: (relicSlotIndex: number): [name: string, icon: number, slotTypeName: string, link: string] => {return ['', 0, '', '']},
    GetRelicInfoByItemID: (itemID: number): [name: string, icon: number, slotTypeName: string, link: string] => {return ['', 0, '', '']},
    GetRelicLockedReason: (relicSlotIndex: number): string | undefined => {return ''},
    GetRelicSlotType: (relicSlotIndex: number): string => {return ''},
    GetRespecArtifactArtInfo: (): ArtifactArtInfo => {return {textureKit: '', titleName: '', titleColor: {} as any, barConnectedColor: {} as any, barDisconnectedColor: {} as any, uiModelSceneID: 0, spellVisualKitID: 0}},
    GetRespecArtifactInfo: (): [itemID: number, altItemID: number | undefined, name: string, icon: number, xp: number, pointsSpent: number, quality: number, artifactAppearanceID: number, appearanceModID: number, itemAppearanceID: number | undefined, altItemAppearanceID: number | undefined, altOnTop: boolean, tier: number] => {return [0, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, false, 0]},
    GetRespecCost: (): number => {return 0},
    GetTotalPowerCost: (startingTrait: number, numTraits: number, artifactTier: number): number => {return 0},
    GetTotalPurchasedRanks: (): number => {return 0},
    IsArtifactDisabled: (): boolean => {return false},
    IsAtForge: (): boolean => {return false},
    IsEquippedArtifactDisabled: (): boolean => {return false},
    IsEquippedArtifactMaxed: (): boolean => {return false},
    IsMaxedByRulesOrEffect: (): boolean => {return false},
    IsPowerKnown: (powerID: number): boolean => {return false},
    IsViewedArtifactEquipped: (): boolean => {return false},
    SetAppearance: (artifactAppearanceID: number): void => {},
    SetForgeCamera: (): void => {},
    SetForgeRotation: (forgeRotationX: number, forgeRotationY: number, forgeRotationZ: number): void => {},
    SetPreviewAppearance: (artifactAppearanceID: number): void => {},
    ShouldSuppressForgeRotation: (): boolean => {return false},
};
export type ArtifactCloseEvent = (frame: UIFrame, e: "ARTIFACT_CLOSE") => void
export type ArtifactEndgameRefundEvent = (frame: UIFrame, e: "ARTIFACT_ENDGAME_REFUND", numRefundedPowers: number, refundedTier: number, bagOrSlotIndex: number, slotIndex: number | undefined) => void
export type ArtifactRelicForgeCloseEvent = (frame: UIFrame, e: "ARTIFACT_RELIC_FORGE_CLOSE") => void
export type ArtifactRelicForgePreviewRelicChangedEvent = (frame: UIFrame, e: "ARTIFACT_RELIC_FORGE_PREVIEW_RELIC_CHANGED") => void
export type ArtifactRelicForgeUpdateEvent = (frame: UIFrame, e: "ARTIFACT_RELIC_FORGE_UPDATE") => void
export type ArtifactRelicInfoReceivedEvent = (frame: UIFrame, e: "ARTIFACT_RELIC_INFO_RECEIVED") => void
export type ArtifactRespecPromptEvent = (frame: UIFrame, e: "ARTIFACT_RESPEC_PROMPT") => void
export type ArtifactTierChangedEvent = (frame: UIFrame, e: "ARTIFACT_TIER_CHANGED", newTier: number, bagOrSlotIndex: number, slotIndex: number | undefined) => void
export type ArtifactUpdateEvent = (frame: UIFrame, e: "ARTIFACT_UPDATE", newItem: boolean) => void
export type ArtifactXpUpdateEvent = (frame: UIFrame, e: "ARTIFACT_XP_UPDATE") => void