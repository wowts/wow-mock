import { ItemLocationMixin } from '../mixins';
import { UIFrame } from "../ui";

export const C_ScrappingMachineUI = {
    CloseScrappingMachine: (): void => {},
    DropPendingScrapItemFromCursor: (index: number): void => {},
    GetCurrentPendingScrapItemLocationByIndex: (index: number): ItemLocationMixin => {return {} as any},
    GetScrapSpellID: (): number => {return 0},
    GetScrappingMachineName: (): string => {return ''},
    HasScrappableItems: (): boolean => {return false},
    RemoveAllScrapItems: (): void => {},
    RemoveCurrentScrappingItem: (): void => {},
    RemoveItemToScrap: (index: number): void => {},
    ScrapItems: (): void => {},
    SetScrappingMachine: (gameObject: string): void => {},
    ValidateScrappingList: (): void => {},
};
export type ScrappingMachineCloseEvent = (frame: UIFrame, e: "SCRAPPING_MACHINE_CLOSE") => void
export type ScrappingMachineItemRemovedOrCancelledEvent = (frame: UIFrame, e: "SCRAPPING_MACHINE_ITEM_REMOVED_OR_CANCELLED", index: number) => void
export type ScrappingMachinePendingItemChangedEvent = (frame: UIFrame, e: "SCRAPPING_MACHINE_PENDING_ITEM_CHANGED") => void
export type ScrappingMachineScrappingFinishedEvent = (frame: UIFrame, e: "SCRAPPING_MACHINE_SCRAPPING_FINISHED") => void
export type ScrappingMachineShowEvent = (frame: UIFrame, e: "SCRAPPING_MACHINE_SHOW") => void