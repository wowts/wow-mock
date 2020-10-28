import { UIFrame } from "../ui";

export const C_TransmogSets = {
    ClearLatestSource: (): void => {},
    ClearNewSource: (sourceID: number): void => {},
    ClearSetNewSourcesForSlot: (transmogSetID: number, slot: number): void => {},
    GetAllSourceIDs: (transmogSetID: number): any => {return {} as any},
    GetBaseSetsCounts: (): [numCollected: number, numTotal: number] => {return [0, 0]},
    GetBaseSetsFilter: (index: number): boolean => {return false},
    GetCameraIDs: (): [detailsCameraID: number | undefined, vendorCameraID: number | undefined] => {return [0, 0]},
    GetIsFavorite: (transmogSetID: number): [isFavorite: boolean, isGroupFavorite: boolean] => {return [false, false]},
    GetLatestSource: (): number => {return 0},
    GetSetNewSources: (transmogSetID: number): any => {return {} as any},
    GetSetsContainingSourceID: (sourceID: number): any => {return {} as any},
    GetSourceIDsForSlot: (transmogSetID: number, slot: number): any => {return {} as any},
    GetSourcesForSlot: (transmogSetID: number, slot: number): any => {return {} as any},
    HasUsableSets: (): boolean => {return false},
    IsBaseSetCollected: (transmogSetID: number): boolean => {return false},
    IsNewSource: (sourceID: number): boolean => {return false},
    SetBaseSetsFilter: (index: number, isChecked: boolean): void => {},
    SetHasNewSources: (transmogSetID: number): boolean => {return false},
    SetHasNewSourcesForSlot: (transmogSetID: number, slot: number): boolean => {return false},
    SetIsFavorite: (transmogSetID: number, isFavorite: boolean): void => {},
};
