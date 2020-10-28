import { UIFrame } from "../ui";

export const C_Loot = {
    IsLegacyLootModeEnabled: (): boolean => {return false},
};
export type AzeriteEmpoweredItemLootedEvent = (frame: UIFrame, e: "AZERITE_EMPOWERED_ITEM_LOOTED", itemLink: string) => void
export type BonusRollActivateEvent = (frame: UIFrame, e: "BONUS_ROLL_ACTIVATE") => void
export type BonusRollDeactivateEvent = (frame: UIFrame, e: "BONUS_ROLL_DEACTIVATE") => void
export type BonusRollFailedEvent = (frame: UIFrame, e: "BONUS_ROLL_FAILED") => void
export type BonusRollResultEvent = (frame: UIFrame, e: "BONUS_ROLL_RESULT", typeIdentifier: string, itemLink: string, quantity: number, specID: number, sex: number, personalLootToast: boolean, currencyID: number | undefined, isSecondaryResult: boolean, corrupted: boolean) => void
export type BonusRollStartedEvent = (frame: UIFrame, e: "BONUS_ROLL_STARTED") => void
export type CancelLootRollEvent = (frame: UIFrame, e: "CANCEL_LOOT_ROLL", rollID: number) => void
export type ConfirmDisenchantRollEvent = (frame: UIFrame, e: "CONFIRM_DISENCHANT_ROLL", rollID: number, rollType: number) => void
export type ConfirmLootRollEvent = (frame: UIFrame, e: "CONFIRM_LOOT_ROLL", rollID: number, rollType: number, confirmReason: string) => void
export type EncounterLootReceivedEvent = (frame: UIFrame, e: "ENCOUNTER_LOOT_RECEIVED", encounterID: number, itemID: number, itemLink: string, quantity: number, itemName: string, fileName: string) => void
export type GarrisonMissionBonusRollLootEvent = (frame: UIFrame, e: "GARRISON_MISSION_BONUS_ROLL_LOOT", itemID: number, quantity: number) => void
export type ItemPushEvent = (frame: UIFrame, e: "ITEM_PUSH", bagSlot: number, iconFileID: number) => void
export type LootBindConfirmEvent = (frame: UIFrame, e: "LOOT_BIND_CONFIRM", lootSlot: number) => void
export type LootClosedEvent = (frame: UIFrame, e: "LOOT_CLOSED") => void
export type LootHistoryAutoShowEvent = (frame: UIFrame, e: "LOOT_HISTORY_AUTO_SHOW", rollID: number, isMasterLoot: boolean) => void
export type LootHistoryFullUpdateEvent = (frame: UIFrame, e: "LOOT_HISTORY_FULL_UPDATE") => void
export type LootHistoryRollChangedEvent = (frame: UIFrame, e: "LOOT_HISTORY_ROLL_CHANGED", historyIndex: number, playerIndex: number) => void
export type LootHistoryRollCompleteEvent = (frame: UIFrame, e: "LOOT_HISTORY_ROLL_COMPLETE") => void
export type LootItemAvailableEvent = (frame: UIFrame, e: "LOOT_ITEM_AVAILABLE", itemTooltip: string, lootHandle: number) => void
export type LootItemRollWonEvent = (frame: UIFrame, e: "LOOT_ITEM_ROLL_WON", itemLink: string, rollQuantity: number, rollType: number, roll: number, upgraded: boolean) => void
export type LootOpenedEvent = (frame: UIFrame, e: "LOOT_OPENED", autoLoot: boolean, isFromItem: boolean) => void
export type LootReadyEvent = (frame: UIFrame, e: "LOOT_READY", autoloot: boolean) => void
export type LootRollsCompleteEvent = (frame: UIFrame, e: "LOOT_ROLLS_COMPLETE", lootHandle: number) => void
export type LootSlotChangedEvent = (frame: UIFrame, e: "LOOT_SLOT_CHANGED", lootSlot: number) => void
export type LootSlotClearedEvent = (frame: UIFrame, e: "LOOT_SLOT_CLEARED", lootSlot: number) => void
export type OpenMasterLootListEvent = (frame: UIFrame, e: "OPEN_MASTER_LOOT_LIST") => void
export type PetBattleLootReceivedEvent = (frame: UIFrame, e: "PET_BATTLE_LOOT_RECEIVED", typeIdentifier: string, itemLink: string, quantity: number) => void
export type PlayerLootSpecUpdatedEvent = (frame: UIFrame, e: "PLAYER_LOOT_SPEC_UPDATED") => void
export type QuestCurrencyLootReceivedEvent = (frame: UIFrame, e: "QUEST_CURRENCY_LOOT_RECEIVED", questID: number, currencyId: number, quantity: number) => void
export type QuestLootReceivedEvent = (frame: UIFrame, e: "QUEST_LOOT_RECEIVED", questID: number, itemLink: string, quantity: number) => void
export type ShowLootToastEvent = (frame: UIFrame, e: "SHOW_LOOT_TOAST", typeIdentifier: string, itemLink: string, quantity: number, specID: number, sex: number, personalLootToast: boolean, toastMethod: number, lessAwesome: boolean, upgraded: boolean, corrupted: boolean) => void
export type ShowLootToastLegendaryLootedEvent = (frame: UIFrame, e: "SHOW_LOOT_TOAST_LEGENDARY_LOOTED", itemLink: string) => void
export type ShowLootToastUpgradeEvent = (frame: UIFrame, e: "SHOW_LOOT_TOAST_UPGRADE", itemLink: string, quantity: number, specID: number, sex: number, baseQuality: number, personalLootToast: boolean, lessAwesome: boolean) => void
export type ShowPvpFactionLootToastEvent = (frame: UIFrame, e: "SHOW_PVP_FACTION_LOOT_TOAST", typeIdentifier: string, itemLink: string, quantity: number, specID: number, sex: number, personalLootToast: boolean, lessAwesome: boolean) => void
export type ShowRatedPvpRewardToastEvent = (frame: UIFrame, e: "SHOW_RATED_PVP_REWARD_TOAST", typeIdentifier: string, itemLink: string, quantity: number, specID: number, sex: number, personalLootToast: boolean, lessAwesome: boolean) => void
export type StartLootRollEvent = (frame: UIFrame, e: "START_LOOT_ROLL", rollID: number, rollTime: number, lootHandle: number | undefined) => void
export type TrialCapReachedMoneyEvent = (frame: UIFrame, e: "TRIAL_CAP_REACHED_MONEY") => void
export type UpdateMasterLootListEvent = (frame: UIFrame, e: "UPDATE_MASTER_LOOT_LIST") => void