import { OptionalReagentInfo, TradeSkillRecipeInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum OptionalReagentItemFlag {
    TooltipShowsAsStatModifications = 0,
}
export interface OptionalReagentSlot {
    requiredSkillRank: number;
    slotText: string | undefined;
    options: LuaArray<number>;
}
export const C_TradeSkillUI = {
    CraftRecipe: (
        recipeSpellID: number,
        numCasts: number,
        optionalReagents: LuaArray<OptionalReagentInfo> | undefined,
        recipeLevel: number | undefined
    ): void => {},
    GetAllProfessionTradeSkillLines: (): LuaArray<number> => {
        return {} as any;
    },
    GetOptionalReagentBonusText: (
        recipeSpellID: number,
        optionalReagentIndex: number,
        optionalReagents: LuaArray<OptionalReagentInfo>
    ): string => {
        return "";
    },
    GetOptionalReagentInfo: (
        recipeSpellID: number
    ): LuaArray<OptionalReagentSlot> => {
        return {} as any;
    },
    GetRecipeInfo: (
        recipeSpellID: number,
        recipeLevel: number | undefined
    ): TradeSkillRecipeInfo | undefined => {
        return {} as any;
    },
    GetRecipeNumReagents: (
        recipeSpellID: number,
        recipeLevel: number | undefined
    ): number => {
        return 0;
    },
    GetRecipeReagentInfo: (
        recipeSpellID: number,
        reagentIndex: number,
        recipeLevel: number | undefined
    ): [
        reagentName: string | undefined,
        reagentFileID: number | undefined,
        reagentCount: number,
        playerReagentCount: number
    ] => {
        return ["", 0, 0, 0];
    },
    GetRecipeRepeatCount: (): number => {
        return 0;
    },
    GetTradeSkillDisplayName: (skillLineID: number): string => {
        return "";
    },
    GetTradeSkillLine: (): [
        skillLineID: number,
        skillLineDisplayName: string,
        skillLineRank: number,
        skillLineMaxRank: number,
        skillLineModifier: number,
        parentSkillLineID: number | undefined,
        parentSkillLineDisplayName: string | undefined
    ] => {
        return [0, "", 0, 0, 0, 0, ""];
    },
    GetTradeSkillLineInfoByID: (
        skillLineID: number
    ): [
        skillLineDisplayName: string,
        skillLineRank: number,
        skillLineMaxRank: number,
        skillLineModifier: number,
        parentSkillLineID: number | undefined
    ] => {
        return ["", 0, 0, 0, 0];
    },
    IsEmptySkillLineCategory: (categoryID: number): boolean => {
        return false;
    },
    SetRecipeRepeatCount: (
        recipeSpellID: number,
        numCasts: number,
        optionalReagents: LuaArray<OptionalReagentInfo> | undefined
    ): void => {},
};
export type NewRecipeLearnedEvent = (
    frame: UIFrame,
    e: "NEW_RECIPE_LEARNED",
    recipeID: number,
    recipeLevel: number | undefined,
    baseRecipeID: number | undefined
) => void;
export type ObliterumForgeCloseEvent = (
    frame: UIFrame,
    e: "OBLITERUM_FORGE_CLOSE"
) => void;
export type ObliterumForgePendingItemChangedEvent = (
    frame: UIFrame,
    e: "OBLITERUM_FORGE_PENDING_ITEM_CHANGED"
) => void;
export type ObliterumForgeShowEvent = (
    frame: UIFrame,
    e: "OBLITERUM_FORGE_SHOW"
) => void;
export type TradeSkillCloseEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_CLOSE"
) => void;
export type TradeSkillDataSourceChangedEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_DATA_SOURCE_CHANGED"
) => void;
export type TradeSkillDataSourceChangingEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_DATA_SOURCE_CHANGING"
) => void;
export type TradeSkillDetailsUpdateEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_DETAILS_UPDATE"
) => void;
export type TradeSkillListUpdateEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_LIST_UPDATE"
) => void;
export type TradeSkillNameUpdateEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_NAME_UPDATE"
) => void;
export type TradeSkillOptionalReagentBonusTextUpdatedEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_OPTIONAL_REAGENT_BONUS_TEXT_UPDATED",
    itemID: number
) => void;
export type TradeSkillShowEvent = (
    frame: UIFrame,
    e: "TRADE_SKILL_SHOW"
) => void;
export type UpdateTradeskillRecastEvent = (
    frame: UIFrame,
    e: "UPDATE_TRADESKILL_RECAST"
) => void;
