import { TransmogCollectionType, TransmogSearchType } from "./common";
import { TransmogLocationMixin, TransmogPendingInfoMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum TransmogModification {
    Main = 0,
    Secondary = 1,
}
export const enum TransmogPendingType {
    Apply = 0,
    Revert = 1,
    ToggleOn = 2,
    ToggleOff = 3,
}
export const enum TransmogSource {
    None = 0,
    JournalEncounter = 1,
    Quest = 2,
    Vendor = 3,
    WorldDrop = 4,
    HiddenUntilCollected = 5,
    CantCollect = 6,
    Achievement = 7,
    Profession = 8,
    NotValidForTransmog = 9,
}
export const enum TransmogType {
    Appearance = 0,
    Illusion = 1,
}
export interface TransmogApplyWarningInfo {
    itemLink: string;
    text: string;
}
export const C_Transmog = {
    ApplyAllPending: (currentSpecOnly: boolean): boolean => {
        return false;
    },
    CanHaveSecondaryAppearanceForSlotID: (slotID: number): boolean => {
        return false;
    },
    CanTransmogItem: (
        itemInfo: string
    ): [
        canBeTransmogged: boolean,
        selfFailureReason: string | undefined,
        canTransmogOthers: boolean,
        othersFailureReason: string | undefined
    ] => {
        return [false, "", false, ""];
    },
    CanTransmogItemWithItem: (
        targetItemInfo: string,
        sourceItemInfo: string
    ): [canTransmog: boolean, failureReason: string | undefined] => {
        return [false, ""];
    },
    ClearAllPending: (): void => {},
    ClearPending: (transmogLocation: TransmogLocationMixin): void => {},
    Close: (): void => {},
    GetApplyCost: (): number | undefined => {
        return 0;
    },
    GetApplyWarnings: (): LuaArray<TransmogApplyWarningInfo> => {
        return {} as any;
    },
    GetBaseCategory: (transmogID: number): TransmogCollectionType => {
        return TransmogCollectionType.None;
    },
    GetCreatureDisplayIDForSource: (
        itemModifiedAppearanceID: number
    ): number | undefined => {
        return 0;
    },
    GetItemIDForSource: (
        itemModifiedAppearanceID: number
    ): number | undefined => {
        return 0;
    },
    GetPending: (
        transmogLocation: TransmogLocationMixin
    ): TransmogPendingInfoMixin => {
        return {} as any;
    },
    GetSlotEffectiveCategory: (
        transmogLocation: TransmogLocationMixin
    ): TransmogCollectionType => {
        return TransmogCollectionType.None;
    },
    GetSlotForInventoryType: (inventoryType: number): number => {
        return 0;
    },
    GetSlotInfo: (
        transmogLocation: TransmogLocationMixin
    ): [
        isTransmogrified: boolean,
        hasPending: boolean,
        isPendingCollected: boolean,
        canTransmogrify: boolean,
        cannotTransmogrifyReason: number,
        hasUndo: boolean,
        isHideVisual: boolean,
        texture: number | undefined
    ] => {
        return [false, false, false, false, 0, false, false, 0];
    },
    GetSlotUseError: (
        transmogLocation: TransmogLocationMixin
    ): [errorCode: number, errorString: string] => {
        return [0, ""];
    },
    GetSlotVisualInfo: (
        transmogLocation: TransmogLocationMixin
    ): [
        baseSourceID: number,
        baseVisualID: number,
        appliedSourceID: number,
        appliedVisualID: number,
        pendingSourceID: number,
        pendingVisualID: number,
        hasUndo: boolean,
        isHideVisual: boolean,
        itemSubclass: number
    ] => {
        return [0, 0, 0, 0, 0, 0, false, false, 0];
    },
    IsAtTransmogNPC: (): boolean => {
        return false;
    },
    IsSlotBeingCollapsed: (
        transmogLocation: TransmogLocationMixin
    ): boolean => {
        return false;
    },
    LoadOutfit: (outfitID: number): void => {},
    SetPending: (
        transmogLocation: TransmogLocationMixin,
        pendingInfo: TransmogPendingInfoMixin
    ): void => {},
};
export type TransmogCollectionCameraUpdateEvent = (
    frame: UIFrame,
    e: "TRANSMOG_COLLECTION_CAMERA_UPDATE"
) => void;
export type TransmogCollectionItemUpdateEvent = (
    frame: UIFrame,
    e: "TRANSMOG_COLLECTION_ITEM_UPDATE"
) => void;
export type TransmogCollectionSourceAddedEvent = (
    frame: UIFrame,
    e: "TRANSMOG_COLLECTION_SOURCE_ADDED",
    itemModifiedAppearanceID: number
) => void;
export type TransmogCollectionSourceRemovedEvent = (
    frame: UIFrame,
    e: "TRANSMOG_COLLECTION_SOURCE_REMOVED",
    itemModifiedAppearanceID: number
) => void;
export type TransmogCollectionUpdatedEvent = (
    frame: UIFrame,
    e: "TRANSMOG_COLLECTION_UPDATED",
    collectionIndex: number | undefined,
    modID: number | undefined,
    itemAppearanceID: number | undefined,
    reason: string | undefined
) => void;
export type TransmogSearchUpdatedEvent = (
    frame: UIFrame,
    e: "TRANSMOG_SEARCH_UPDATED",
    searchType: TransmogSearchType,
    collectionType: TransmogCollectionType | undefined
) => void;
export type TransmogSetsUpdateFavoriteEvent = (
    frame: UIFrame,
    e: "TRANSMOG_SETS_UPDATE_FAVORITE"
) => void;
export type TransmogSourceCollectabilityUpdateEvent = (
    frame: UIFrame,
    e: "TRANSMOG_SOURCE_COLLECTABILITY_UPDATE",
    itemModifiedAppearanceID: number,
    collectable: boolean
) => void;
export type TransmogrifyCloseEvent = (
    frame: UIFrame,
    e: "TRANSMOGRIFY_CLOSE"
) => void;
export type TransmogrifyItemUpdateEvent = (
    frame: UIFrame,
    e: "TRANSMOGRIFY_ITEM_UPDATE"
) => void;
export type TransmogrifyOpenEvent = (
    frame: UIFrame,
    e: "TRANSMOGRIFY_OPEN"
) => void;
export type TransmogrifySuccessEvent = (
    frame: UIFrame,
    e: "TRANSMOGRIFY_SUCCESS",
    transmogLocation: TransmogLocationMixin
) => void;
export type TransmogrifyUpdateEvent = (
    frame: UIFrame,
    e: "TRANSMOGRIFY_UPDATE",
    transmogLocation: TransmogLocationMixin | undefined,
    action: string | undefined
) => void;
