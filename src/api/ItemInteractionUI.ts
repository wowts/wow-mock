import { ItemLocationMixin } from '../mixins';
import { UIFrame } from "../ui";
export const enum ItemInteractionFrameType {
    CleanseCorruption = 0
}
export interface ItemInteractionFrameInfo {
    textureKit: string;
    openSoundKitID: number;
    closeSoundKitID: number;
    titleText: string;
    tutorialText: string;
    buttonText: string;
    frameType: ItemInteractionFrameType;
    description: string | undefined;
    cost: number | undefined;
    currencyTypeId: number | undefined;
    dropInSlotSoundKitId: number | undefined
}
export const C_ItemInteraction = {
    ClearPendingItem: (): void => {},
    CloseUI: (): void => {},
    GetItemInteractionInfo: (): ItemInteractionFrameInfo | undefined => {return {textureKit: '', openSoundKitID: 0, closeSoundKitID: 0, titleText: '', tutorialText: '', buttonText: '', frameType: ItemInteractionFrameType.CleanseCorruption, description: '', cost: 0, currencyTypeId: 0, dropInSlotSoundKitId: 0}},
    GetItemInteractionSpellId: (): number => {return 0},
    InitializeFrame: (): void => {},
    PerformItemInteraction: (): void => {},
    Reset: (): void => {},
    SetCorruptionReforgerItemTooltip: (): void => {},
    SetPendingItem: (item: ItemLocationMixin | undefined): boolean => {return false},
};
export type ItemInteractionCloseEvent = (frame: UIFrame, e: "ITEM_INTERACTION_CLOSE") => void
export type ItemInteractionItemSelectionUpdatedEvent = (frame: UIFrame, e: "ITEM_INTERACTION_ITEM_SELECTION_UPDATED", itemLocation: ItemLocationMixin | undefined) => void
export type ItemInteractionOpenEvent = (frame: UIFrame, e: "ITEM_INTERACTION_OPEN") => void