import { LuaArray } from "@wowts/lua";
import { BarberShopRaceData } from "./api";

export const enum WeeklyRewardChestThresholdType {
    None = 0,
    MythicPlus = 1,
    RankedPvP = 2,
    Raid = 3,
    AlsoReceive = 4,
    Concession = 5,
}
export interface CachedRewardType {}
export interface AppearanceSourceInfo {}
export interface TradeSkillRecipeInfo {}
export const enum SoulbindConduitType {
    Finesse = 0,
    Potency = 1,
    Endurance = 2,
    Flex = 3,
}
export const enum SoulbindNodeState {
    Unavailable = 0,
    Unselected = 1,
    Selectable = 2,
    Selected = 3,
}
export interface SoulbindConduitTransactionType {}
export interface GuildTabardInfo {}
export interface QueueSpecificInfo {}
export interface RuneforgeLegendaryCraftDescription {}
export interface RuneforgeItemPreviewInfo {}
export interface RuneforgeLegendaryComponentInfo {
    powerID: number;
    modifiers: LuaArray<number>;
}
export interface RuneforgePower {
    runeforgePowerID: number;
    descriptionSpellID: number;
    slots: LuaArray<number>;
    iconFileID: number;
    state: number;
    name: string;
    specName: string;
    matchesSpec: boolean;
    source: string;
    description: string;
}
export interface GarrisonTalentTreeInfo {}
export interface CalendarTime {}
export interface CharacterAlternateFormData {
    raceData?: BarberShopRaceData;
    sex?: number;
}
export interface ItemLocationMixin {
    Clear(): void;
    SetBagAndSlot(bagID: number, slotIndex: number): void;
    GetBagAndSlot(): [number | null, number | null];
    SetEquipmentSlot(equipmentSlotIndex: number): void;
    GetEquipmentSlot(): number | null;
    IsEquipmentSlot(): boolean;
    IsBagAndSlot(): boolean;
    HasAnyLocation(): boolean;
    IsEqualToBagAndSlot(otherBagID: number, otherSlotIndex: number): boolean;
    IsEqualToEquipmentSlot(otherEquipmentSlotIndex: number): boolean;
    IsEqualTo(otherItemLocation: ItemLocationMixin): boolean;
    IsValid(): boolean;
}
export interface PlayerLocationMixin {}
export interface Vector2DMixin {}
export interface TransmogLocationMixin {}
export interface ColorMixin {
    r: number;
    g: number;
    b: number;
    a: number;
}
export function CreateColor(
    r: number,
    g: number,
    b: number,
    a: number
): ColorMixin {
    return {
        r,
        g,
        b,
        a,
    };
}
export interface Vector3DMixin {}
export interface OptionalReagentInfo {}
export interface BountyInfo {}
export interface CharCustomizationCategory {}
export interface CurrencyCost {}
export interface ItemTransmogInfoMixin {}
export interface TransmogPendingInfoMixin {}

export class FakeItemLocation {
    CreateFromEquipmentSlot(equipmentSlotIndex: number): ItemLocationMixin {
        return {
            Clear() {},
            GetBagAndSlot() {
                return [null, null];
            },
            GetEquipmentSlot() {
                return 0;
            },
            HasAnyLocation() {
                return false;
            },
            IsBagAndSlot() {
                return false;
            },
            IsEqualTo(other: ItemLocationMixin) {
                return false;
            },
            IsEqualToBagAndSlot(otherBagId: number, otherSlotIndex: number) {
                return false;
            },
            IsEqualToEquipmentSlot(otherEquipmentSlotIndex: number) {
                return false;
            },
            IsEquipmentSlot() {
                return true;
            },
            IsValid() {
                return true;
            },
            SetBagAndSlot(bagID: number, slotIndex: number) {},
            SetEquipmentSlot(equipmentSlotIndex: number) {},
        };
    }
}
export const ItemLocation = new FakeItemLocation();
