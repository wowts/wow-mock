import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_PaperDollInfo = {
    GetArmorEffectiveness: (armor: number, attackerLevel: number): number => {
        return 0;
    },
    GetArmorEffectivenessAgainstTarget: (armor: number): number | undefined => {
        return 0;
    },
    GetInspectAzeriteItemEmpoweredChoices: (
        unit: string,
        equipmentSlotIndex: number
    ): LuaArray<number> => {
        return {} as any;
    },
    GetInspectItemLevel: (unit: string): number => {
        return 0;
    },
    GetMinItemLevel: (): number | undefined => {
        return 0;
    },
    GetStaggerPercentage: (
        unit: string
    ): [stagger: number, staggerAgainstTarget: number | undefined] => {
        return [0, 0];
    },
    OffhandHasShield: (): boolean => {
        return false;
    },
    OffhandHasWeapon: (): boolean => {
        return false;
    },
};
export type AvoidanceUpdateEvent = (
    frame: UIFrame,
    e: "AVOIDANCE_UPDATE"
) => void;
export type CharacterPointsChangedEvent = (
    frame: UIFrame,
    e: "CHARACTER_POINTS_CHANGED",
    change: number
) => void;
export type CharacterUpgradeSpellTierSetEvent = (
    frame: UIFrame,
    e: "CHARACTER_UPGRADE_SPELL_TIER_SET",
    tierIndex: number
) => void;
export type CombatRatingUpdateEvent = (
    frame: UIFrame,
    e: "COMBAT_RATING_UPDATE"
) => void;
export type DisableXpGainEvent = (frame: UIFrame, e: "DISABLE_XP_GAIN") => void;
export type EnableXpGainEvent = (frame: UIFrame, e: "ENABLE_XP_GAIN") => void;
export type EquipBindConfirmEvent = (
    frame: UIFrame,
    e: "EQUIP_BIND_CONFIRM",
    slot: number
) => void;
export type InspectHonorUpdateEvent = (
    frame: UIFrame,
    e: "INSPECT_HONOR_UPDATE"
) => void;
export type InspectReadyEvent = (
    frame: UIFrame,
    e: "INSPECT_READY",
    inspecteeGUID: string
) => void;
export type LifestealUpdateEvent = (
    frame: UIFrame,
    e: "LIFESTEAL_UPDATE"
) => void;
export type MasteryUpdateEvent = (frame: UIFrame, e: "MASTERY_UPDATE") => void;
export type PetSpellPowerUpdateEvent = (
    frame: UIFrame,
    e: "PET_SPELL_POWER_UPDATE"
) => void;
export type PlayerAvgItemLevelUpdateEvent = (
    frame: UIFrame,
    e: "PLAYER_AVG_ITEM_LEVEL_UPDATE"
) => void;
export type PlayerEquipmentChangedEvent = (
    frame: UIFrame,
    e: "PLAYER_EQUIPMENT_CHANGED",
    equipmentSlot: number,
    hasCurrent: boolean
) => void;
export type PvpPowerUpdateEvent = (
    frame: UIFrame,
    e: "PVP_POWER_UPDATE"
) => void;
export type SpeedUpdateEvent = (frame: UIFrame, e: "SPEED_UPDATE") => void;
export type SpellPowerChangedEvent = (
    frame: UIFrame,
    e: "SPELL_POWER_CHANGED"
) => void;
export type SturdinessUpdateEvent = (
    frame: UIFrame,
    e: "STURDINESS_UPDATE"
) => void;
export type UpdateFactionEvent = (frame: UIFrame, e: "UPDATE_FACTION") => void;
export type UpdateInventoryAlertsEvent = (
    frame: UIFrame,
    e: "UPDATE_INVENTORY_ALERTS"
) => void;
export type UpdateInventoryDurabilityEvent = (
    frame: UIFrame,
    e: "UPDATE_INVENTORY_DURABILITY"
) => void;
