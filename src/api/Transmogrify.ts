import { TransmogLocationMixin } from '../mixins';
import { UIFrame } from "../ui";
export const enum TransmogCollectionType {
    Head = 0,
    Shoulder = 1,
    Back = 2,
    Chest = 3,
    Shirt = 4,
    Tabard = 5,
    Wrist = 6,
    Hands = 7,
    Waist = 8,
    Legs = 9,
    Feet = 10,
    Wand = 11,
    OneHAxe = 12,
    OneHSword = 13,
    OneHMace = 14,
    Dagger = 15,
    Fist = 16,
    Shield = 17,
    Holdable = 18,
    TwoHAxe = 19,
    TwoHSword = 20,
    TwoHMace = 21,
    Staff = 22,
    Polearm = 23,
    Bow = 24,
    Gun = 25,
    Crossbow = 26,
    Warglaives = 27,
    Paired = 28
}
export const enum TransmogModification {
    None = 0,
    RightShoulder = 1
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
    NotValidForTransmog = 9
}
export const enum TransmogType {
    Appearance = 0,
    Illusion = 1
}
export const C_Transmog = {
    ClearAllPending: (): void => {},
    ClearPending: (transmogLocation: TransmogLocationMixin): void => {},
    GetBaseCategory: (transmogID: number): number => {return 0},
    GetCreatureDisplayIDForSource: (itemModifiedAppearanceID: number): number | undefined => {return 0},
    GetItemIDForSource: (itemModifiedAppearanceID: number): number | undefined => {return 0},
    GetSlotForInventoryType: (inventoryType: number): number => {return 0},
    GetSlotInfo: (transmogLocation: TransmogLocationMixin): [isTransmogrified: boolean, hasPending: boolean, isPendingCollected: boolean, canTransmogrify: boolean, cannotTransmogrifyReason: number, hasUndo: boolean, isHideVisual: boolean, texture: number | undefined] => {return [false, false, false, false, 0, false, false, 0]},
    GetSlotUseError: (transmogLocation: TransmogLocationMixin): [errorCode: number, errorString: string] => {return [0, '']},
    GetSlotVisualInfo: (transmogLocation: TransmogLocationMixin): [baseSourceID: number, baseVisualID: number, appliedSourceID: number, appliedVisualID: number, appliedCategoryID: number, pendingSourceID: number, pendingVisualID: number, pendingCategoryID: number, hasUndo: boolean, isHideVisual: boolean, itemSubclass: number] => {return [0, 0, 0, 0, 0, 0, 0, 0, false, false, 0]},
    SetPending: (transmogLocation: TransmogLocationMixin, transmogID: number, categoryID: number | undefined): void => {},
};
export type TransmogCollectionCameraUpdateEvent = (frame: UIFrame, e: "TRANSMOG_COLLECTION_CAMERA_UPDATE") => void
export type TransmogCollectionItemUpdateEvent = (frame: UIFrame, e: "TRANSMOG_COLLECTION_ITEM_UPDATE") => void
export type TransmogCollectionSourceAddedEvent = (frame: UIFrame, e: "TRANSMOG_COLLECTION_SOURCE_ADDED", itemModifiedAppearanceID: number) => void
export type TransmogCollectionSourceRemovedEvent = (frame: UIFrame, e: "TRANSMOG_COLLECTION_SOURCE_REMOVED", itemModifiedAppearanceID: number) => void
export type TransmogCollectionUpdatedEvent = (frame: UIFrame, e: "TRANSMOG_COLLECTION_UPDATED", collectionIndex: number | undefined, modID: number | undefined, itemAppearanceID: number | undefined, reason: string | undefined) => void
export type TransmogSearchUpdatedEvent = (frame: UIFrame, e: "TRANSMOG_SEARCH_UPDATED", searchType: number, collectionType: number | undefined) => void
export type TransmogSetsUpdateFavoriteEvent = (frame: UIFrame, e: "TRANSMOG_SETS_UPDATE_FAVORITE") => void
export type TransmogSourceCollectabilityUpdateEvent = (frame: UIFrame, e: "TRANSMOG_SOURCE_COLLECTABILITY_UPDATE", itemModifiedAppearanceID: number, collectable: boolean) => void
export type TransmogrifyCloseEvent = (frame: UIFrame, e: "TRANSMOGRIFY_CLOSE") => void
export type TransmogrifyItemUpdateEvent = (frame: UIFrame, e: "TRANSMOGRIFY_ITEM_UPDATE") => void
export type TransmogrifyOpenEvent = (frame: UIFrame, e: "TRANSMOGRIFY_OPEN") => void
export type TransmogrifySuccessEvent = (frame: UIFrame, e: "TRANSMOGRIFY_SUCCESS", transmogLocation: TransmogLocationMixin) => void
export type TransmogrifyUpdateEvent = (frame: UIFrame, e: "TRANSMOGRIFY_UPDATE", transmogLocation: TransmogLocationMixin | undefined, action: string | undefined) => void