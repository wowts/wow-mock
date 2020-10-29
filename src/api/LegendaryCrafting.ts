import { RuneforgeLegendaryCraftDescription, ItemLocationMixin, RuneforgeItemPreviewInfo, RuneforgeLegendaryComponentInfo, CurrencyCost, RuneforgePower } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_LegendaryCrafting = {
    CloseRuneforgeInteraction: (): void => {},
    CraftRuneforgeLegendary: (description: RuneforgeLegendaryCraftDescription): void => {},
    GetRuneforgeItemPreviewInfo: (baseItem: ItemLocationMixin, runeforgePowerID: number | undefined, modifiers: LuaArray<number> | undefined): RuneforgeItemPreviewInfo | undefined => {return {} as any},
    GetRuneforgeLegendaryComponentInfo: (runeforgeLegendary: ItemLocationMixin): RuneforgeLegendaryComponentInfo => {return {} as any},
    GetRuneforgeLegendaryCost: (baseItem: ItemLocationMixin): LuaArray<CurrencyCost> => {return {} as any},
    GetRuneforgeLegendaryCraftSpellID: (): number => {return 0},
    GetRuneforgeLegendaryCurrencies: (): LuaArray<number> => {return {} as any},
    GetRuneforgeLegendaryUpgradeCost: (runeforgeLegendary: ItemLocationMixin, upgradeItem: ItemLocationMixin): LuaArray<CurrencyCost> => {return {} as any},
    GetRuneforgeModifierInfo: (baseItem: ItemLocationMixin, powerID: number | undefined, addedModifierIndex: number, modifiers: LuaArray<number>): [name: string, description: string] => {return ['', '']},
    GetRuneforgeModifiers: (): LuaArray<number> => {return {} as any},
    GetRuneforgePowerInfo: (runeforgePowerID: number): RuneforgePower => {return {} as any},
    GetRuneforgePowerSlots: (runeforgePowerID: number): LuaArray<string> => {return {} as any},
    GetRuneforgePowers: (baseItem: ItemLocationMixin | undefined): LuaArray<number> => {return {} as any},
    GetRuneforgePowersByClassAndSpec: (classID: number | undefined, specID: number | undefined): LuaArray<number> => {return {} as any},
    IsRuneforgeLegendary: (item: ItemLocationMixin): boolean => {return false},
    IsRuneforgeLegendaryMaxLevel: (runeforgeLegendary: ItemLocationMixin): boolean => {return false},
    IsUpgradeItemValidForRuneforgeLegendary: (runeforgeLegendary: ItemLocationMixin, upgradeItem: ItemLocationMixin): boolean => {return false},
    IsValidRuneforgeBaseItem: (baseItem: ItemLocationMixin): boolean => {return false},
    MakeRuneforgeCraftDescription: (baseItem: ItemLocationMixin, runeforgePowerID: number, modifiers: LuaArray<number>): RuneforgeLegendaryCraftDescription => {return {} as any},
    UpgradeRuneforgeLegendary: (runeforgeLegendary: ItemLocationMixin, upgradeItem: ItemLocationMixin): void => {},
};
export type NewRuneforgePowerAddedEvent = (frame: UIFrame, e: "NEW_RUNEFORGE_POWER_ADDED", powerID: number) => void
export type RuneforgeLegendaryCraftingClosedEvent = (frame: UIFrame, e: "RUNEFORGE_LEGENDARY_CRAFTING_CLOSED") => void
export type RuneforgeLegendaryCraftingOpenedEvent = (frame: UIFrame, e: "RUNEFORGE_LEGENDARY_CRAFTING_OPENED", isUpgrade: boolean) => void
export type RuneforgePowerInfoUpdatedEvent = (frame: UIFrame, e: "RUNEFORGE_POWER_INFO_UPDATED", powerID: number) => void