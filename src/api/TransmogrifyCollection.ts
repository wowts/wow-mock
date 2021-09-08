import { TransmogSearchType, TransmogCollectionType } from "./common";
import { AppearanceSourceInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum TransmogCameraVariation {
    None = 0,
    RightShoulder = 1,
    CloakBackpack = 1,
}
export interface TransmogAppearanceInfoBySourceData {
    appearanceID: number;
    appearanceIsCollected: boolean;
    sourceIsCollected: boolean;
    sourceIsCollectedPermanent: boolean;
    sourceIsCollectedConditional: boolean;
    meetsTransmogPlayerCondition: boolean;
    appearanceHasAnyNonLevelRequirements: boolean;
    appearanceMeetsNonLevelRequirements: boolean;
    appearanceIsUsable: boolean;
    appearanceNumSources: number;
}
export interface TransmogAppearanceJournalEncounterInfo {
    instance: string;
    instanceType: number;
    tiers: LuaArray<string>;
    encounter: string;
    difficulties: LuaArray<string>;
}
export interface TransmogCategoryAppearanceInfo {
    visualID: number;
    isCollected: boolean;
    isFavorite: boolean;
    isHideVisual: boolean;
    uiOrder: number;
    exclusions: number;
    restrictedSlotID: number | undefined;
    isUsable: boolean;
    hasRequiredHoliday: boolean;
    hasActiveRequiredHoliday: boolean;
    alwaysShowItem: boolean | undefined;
}
export interface TransmogIllusionInfo {
    visualID: number;
    sourceID: number;
    icon: number;
    isCollected: boolean;
    isUsable: boolean;
    isHideVisual: boolean;
}
export const C_TransmogCollection = {
    CanAppearanceHaveIllusion: (appearanceID: number): boolean => {
        return false;
    },
    ClearNewAppearance: (visualID: number): void => {},
    ClearSearch: (searchType: TransmogSearchType): boolean => {
        return false;
    },
    DeleteOutfit: (outfitID: number): void => {},
    EndSearch: (): void => {},
    GetAllAppearanceSources: (itemAppearanceID: number): LuaArray<number> => {
        return {} as any;
    },
    GetAppearanceCameraID: (
        itemAppearanceID: number,
        variation: TransmogCameraVariation | undefined
    ): number => {
        return 0;
    },
    GetAppearanceCameraIDBySource: (
        itemModifiedAppearanceID: number,
        variation: TransmogCameraVariation | undefined
    ): number => {
        return 0;
    },
    GetAppearanceInfoBySource: (
        itemModifiedAppearanceID: number
    ): TransmogAppearanceInfoBySourceData => {
        return {
            appearanceID: 0,
            appearanceIsCollected: false,
            sourceIsCollected: false,
            sourceIsCollectedPermanent: false,
            sourceIsCollectedConditional: false,
            meetsTransmogPlayerCondition: false,
            appearanceHasAnyNonLevelRequirements: false,
            appearanceMeetsNonLevelRequirements: false,
            appearanceIsUsable: false,
            appearanceNumSources: 0,
        };
    },
    GetAppearanceSourceDrops: (
        itemModifiedAppearanceID: number
    ): LuaArray<TransmogAppearanceJournalEncounterInfo> => {
        return {} as any;
    },
    GetAppearanceSourceInfo: (
        itemModifiedAppearanceID: number
    ): [
        category: TransmogCollectionType,
        itemAppearanceID: number,
        canHaveIllusion: boolean,
        icon: number,
        isCollected: boolean,
        itemLink: string,
        transmoglink: string,
        sourceType: number | undefined,
        itemSubClass: number
    ] => {
        return [TransmogCollectionType.None, 0, false, 0, false, "", "", 0, 0];
    },
    GetAppearanceSources: (
        appearanceID: number
    ): LuaArray<AppearanceSourceInfo> => {
        return {} as any;
    },
    GetArtifactAppearanceStrings: (
        appearanceID: number
    ): [name: string, hyperlink: string] => {
        return ["", ""];
    },
    GetCategoryAppearances: (
        category: TransmogCollectionType
    ): LuaArray<TransmogCategoryAppearanceInfo> => {
        return {} as any;
    },
    GetCategoryCollectedCount: (category: TransmogCollectionType): number => {
        return 0;
    },
    GetCategoryInfo: (
        category: TransmogCollectionType
    ): [
        name: string,
        isWeapon: boolean,
        canHaveIllusions: boolean,
        canMainHand: boolean,
        canOffHand: boolean
    ] => {
        return ["", false, false, false, false];
    },
    GetCategoryTotal: (category: TransmogCollectionType): number => {
        return 0;
    },
    GetCollectedShown: (): boolean => {
        return false;
    },
    GetFallbackWeaponAppearance: (): number | undefined => {
        return 0;
    },
    GetIllusionInfo: (illusionID: number): TransmogIllusionInfo => {
        return {
            visualID: 0,
            sourceID: 0,
            icon: 0,
            isCollected: false,
            isUsable: false,
            isHideVisual: false,
        };
    },
    GetIllusionStrings: (
        illusionID: number
    ): [name: string, hyperlink: string, sourceText: string | undefined] => {
        return ["", "", ""];
    },
    GetIllusions: (): LuaArray<TransmogIllusionInfo> => {
        return {} as any;
    },
    GetInspectItemTransmogInfoList: (): LuaArray<any> => {
        return {} as any;
    },
    GetIsAppearanceFavorite: (itemAppearanceID: number): boolean => {
        return false;
    },
    GetItemInfo: (
        itemInfo: string
    ): [itemAppearanceID: number, itemModifiedAppearanceID: number] => {
        return [0, 0];
    },
    GetLatestAppearance: (): [
        visualID: number,
        category: TransmogCollectionType
    ] => {
        return [0, TransmogCollectionType.None];
    },
    GetNumMaxOutfits: (): number => {
        return 0;
    },
    GetNumTransmogSources: (): number => {
        return 0;
    },
    GetOutfitInfo: (outfitID: number): [name: string, icon: number] => {
        return ["", 0];
    },
    GetOutfitItemTransmogInfoList: (outfitID: number): LuaArray<any> => {
        return {} as any;
    },
    GetOutfits: (): LuaArray<number> => {
        return {} as any;
    },
    GetPairedArtifactAppearance: (itemModifiedAppearanceID: number): number => {
        return 0;
    },
    GetSourceIcon: (itemModifiedAppearanceID: number): number => {
        return 0;
    },
    GetSourceInfo: (sourceID: number): AppearanceSourceInfo => {
        return {} as any;
    },
    GetSourceRequiredHoliday: (itemModifiedAppearanceID: number): string => {
        return "";
    },
    GetUncollectedShown: (): boolean => {
        return false;
    },
    HasFavorites: (): boolean => {
        return false;
    },
    IsAppearanceHiddenVisual: (appearanceID: number): boolean => {
        return false;
    },
    IsCategoryValidForItem: (
        category: TransmogCollectionType,
        itemInfo: string
    ): boolean => {
        return false;
    },
    IsNewAppearance: (visualID: number): boolean => {
        return false;
    },
    IsSearchDBLoading: (): boolean => {
        return false;
    },
    IsSearchInProgress: (searchType: TransmogSearchType): boolean => {
        return false;
    },
    IsSourceTypeFilterChecked: (index: number): boolean => {
        return false;
    },
    ModifyOutfit: (
        outfitID: number,
        itemTransmogInfoList: LuaArray<any>
    ): void => {},
    NewOutfit: (
        name: string,
        icon: number,
        itemTransmogInfoList: LuaArray<any>
    ): number | undefined => {
        return 0;
    },
    PlayerCanCollectSource: (
        sourceID: number
    ): [hasItemData: boolean, canCollect: boolean] => {
        return [false, false];
    },
    PlayerHasTransmog: (
        itemID: number,
        itemAppearanceModID: number
    ): boolean => {
        return false;
    },
    PlayerHasTransmogItemModifiedAppearance: (
        itemModifiedAppearanceID: number
    ): boolean => {
        return false;
    },
    PlayerKnowsSource: (sourceID: number): boolean => {
        return false;
    },
    RenameOutfit: (outfitID: number, name: string): void => {},
    SearchProgress: (searchType: TransmogSearchType): number => {
        return 0;
    },
    SearchSize: (searchType: TransmogSearchType): number => {
        return 0;
    },
    SetAllSourceTypeFilters: (checked: boolean): void => {},
    SetCollectedShown: (shown: boolean): void => {},
    SetIsAppearanceFavorite: (
        itemAppearanceID: number,
        isFavorite: boolean
    ): void => {},
    SetSearch: (
        searchType: TransmogSearchType,
        searchText: string
    ): boolean => {
        return false;
    },
    SetSearchAndFilterCategory: (category: TransmogCollectionType): void => {},
    SetSourceTypeFilter: (index: number, checked: boolean): void => {},
    SetUncollectedShown: (shown: boolean): void => {},
    UpdateUsableAppearances: (): void => {},
};
