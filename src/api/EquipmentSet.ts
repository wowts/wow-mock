import { UIFrame } from "../ui";

export const C_EquipmentSet = {
    AssignSpecToEquipmentSet: (equipmentSetID: number, specIndex: number): void => {},
    CanUseEquipmentSets: (): boolean => {return false},
    ClearIgnoredSlotsForSave: (): void => {},
    CreateEquipmentSet: (equipmentSetName: string, icon: string | undefined): void => {},
    DeleteEquipmentSet: (equipmentSetID: number): void => {},
    EquipmentSetContainsLockedItems: (equipmentSetID: number): boolean => {return false},
    GetEquipmentSetAssignedSpec: (equipmentSetID: number): number => {return 0},
    GetEquipmentSetForSpec: (specIndex: number): number => {return 0},
    GetEquipmentSetID: (equipmentSetName: string): number => {return 0},
    GetEquipmentSetIDs: (): any => {return {} as any},
    GetEquipmentSetInfo: (equipmentSetID: number): [name: string, iconFileID: number, setID: number, isEquipped: boolean, numItems: number, numEquipped: number, numInInventory: number, numLost: number, numIgnored: number] => {return ['', 0, 0, false, 0, 0, 0, 0, 0]},
    GetIgnoredSlots: (equipmentSetID: number): any => {return {} as any},
    GetItemIDs: (equipmentSetID: number): any => {return {} as any},
    GetItemLocations: (equipmentSetID: number): any => {return {} as any},
    GetNumEquipmentSets: (): number => {return 0},
    IgnoreSlotForSave: (slot: number): void => {},
    IsSlotIgnoredForSave: (slot: number): boolean => {return false},
    ModifyEquipmentSet: (equipmentSetID: number, newName: string, newIcon: string | undefined): void => {},
    PickupEquipmentSet: (equipmentSetID: number): void => {},
    SaveEquipmentSet: (equipmentSetID: number, icon: string | undefined): void => {},
    UnassignEquipmentSetSpec: (equipmentSetID: number): void => {},
    UnignoreSlotForSave: (slot: number): void => {},
    UseEquipmentSet: (equipmentSetID: number): boolean => {return false},
};
export type EquipmentSetsChangedEvent = (frame: UIFrame, e: "EQUIPMENT_SETS_CHANGED") => void
export type EquipmentSwapFinishedEvent = (frame: UIFrame, e: "EQUIPMENT_SWAP_FINISHED", result: boolean, setID: number | undefined) => void
export type EquipmentSwapPendingEvent = (frame: UIFrame, e: "EQUIPMENT_SWAP_PENDING") => void
export type TransmogOutfitsChangedEvent = (frame: UIFrame, e: "TRANSMOG_OUTFITS_CHANGED") => void
export type WearEquipmentSetEvent = (frame: UIFrame, e: "WEAR_EQUIPMENT_SET", setID: number) => void