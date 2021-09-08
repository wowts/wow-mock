import { AppearanceSourceInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface TransmogSetInfo {
    setID: number;
    name: string;
    baseSetID: number | undefined;
    description: string | undefined;
    label: string | undefined;
    expansionID: number;
    patchID: number;
    uiOrder: number;
    classMask: number;
    hiddenUntilCollected: boolean;
    requiredFaction: string | undefined;
    collected: boolean;
    favorite: boolean;
    limitedTimeSet: boolean;
}
export interface TransmogSetPrimaryAppearanceInfo {
    appearanceID: number;
    collected: boolean;
}
export const C_TransmogSets = {
    ClearLatestSource: (): void => {},
    ClearNewSource: (sourceID: number): void => {},
    ClearSetNewSourcesForSlot: (
        transmogSetID: number,
        slot: number
    ): void => {},
    GetAllSets: (): LuaArray<TransmogSetInfo> => {
        return {} as any;
    },
    GetAllSourceIDs: (transmogSetID: number): LuaArray<number> => {
        return {} as any;
    },
    GetBaseSetID: (transmogSetID: number): number => {
        return 0;
    },
    GetBaseSets: (): LuaArray<TransmogSetInfo> => {
        return {} as any;
    },
    GetBaseSetsCounts: (): [numCollected: number, numTotal: number] => {
        return [0, 0];
    },
    GetBaseSetsFilter: (index: number): boolean => {
        return false;
    },
    GetCameraIDs: (): [
        detailsCameraID: number | undefined,
        vendorCameraID: number | undefined
    ] => {
        return [0, 0];
    },
    GetIsFavorite: (
        transmogSetID: number
    ): [isFavorite: boolean, isGroupFavorite: boolean] => {
        return [false, false];
    },
    GetLatestSource: (): number => {
        return 0;
    },
    GetSetInfo: (transmogSetID: number): TransmogSetInfo => {
        return {
            setID: 0,
            name: "",
            baseSetID: 0,
            description: "",
            label: "",
            expansionID: 0,
            patchID: 0,
            uiOrder: 0,
            classMask: 0,
            hiddenUntilCollected: false,
            requiredFaction: "",
            collected: false,
            favorite: false,
            limitedTimeSet: false,
        };
    },
    GetSetNewSources: (transmogSetID: number): LuaArray<number> => {
        return {} as any;
    },
    GetSetPrimaryAppearances: (
        transmogSetID: number
    ): LuaArray<TransmogSetPrimaryAppearanceInfo> => {
        return {} as any;
    },
    GetSetsContainingSourceID: (sourceID: number): LuaArray<number> => {
        return {} as any;
    },
    GetSourceIDsForSlot: (
        transmogSetID: number,
        slot: number
    ): LuaArray<number> => {
        return {} as any;
    },
    GetSourcesForSlot: (
        transmogSetID: number,
        slot: number
    ): LuaArray<AppearanceSourceInfo> => {
        return {} as any;
    },
    GetUsableSets: (): LuaArray<TransmogSetInfo> => {
        return {} as any;
    },
    GetVariantSets: (transmogSetID: number): LuaArray<TransmogSetInfo> => {
        return {} as any;
    },
    HasUsableSets: (): boolean => {
        return false;
    },
    IsBaseSetCollected: (transmogSetID: number): boolean => {
        return false;
    },
    IsNewSource: (sourceID: number): boolean => {
        return false;
    },
    SetBaseSetsFilter: (index: number, isChecked: boolean): void => {},
    SetHasNewSources: (transmogSetID: number): boolean => {
        return false;
    },
    SetHasNewSourcesForSlot: (transmogSetID: number, slot: number): boolean => {
        return false;
    },
    SetIsFavorite: (transmogSetID: number, isFavorite: boolean): void => {},
};
