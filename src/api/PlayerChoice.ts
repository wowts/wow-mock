import { ColorMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum PlayerChoiceRarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2,
    Epic = 3
}
export interface PlayerChoiceInfo {
    choiceID: number;
    questionText: string;
    numOptions: number;
    uiTextureKit: string;
    soundKitID: number | undefined;
    hideWarboardHeader: boolean;
    keepOpenAfterChoice: boolean
}
export interface PlayerChoiceOptionInfo {
    id: number;
    responseIdentifier: number;
    buttonText: string;
    description: string;
    header: string;
    choiceArtID: number;
    confirmation: string | undefined;
    widgetSetID: number | undefined;
    disabledButton: boolean;
    desaturatedArt: boolean;
    disabledOption: boolean;
    groupID: number | undefined;
    headerIconAtlasElement: string | undefined;
    subHeader: string | undefined;
    buttonTooltip: string | undefined;
    rewardQuestID: number | undefined;
    soundKitID: number | undefined;
    hasRewards: boolean;
    rarity: PlayerChoiceRarity;
    rarityColor: ColorMixin | undefined;
    typeArtID: number | undefined;
    uiTextureKit: string | undefined;
    spellID: number | undefined;
    maxStacks: number
}
export interface PlayerChoiceRewardCurrencyInfo {
    currencyId: number;
    currencyTexture: number;
    quantity: number
}
export interface PlayerChoiceRewardInfo {
    money: number | undefined;
    xp: number | undefined;
    itemRewards: LuaArray<PlayerChoiceRewardItemInfo>;
    currencyRewards: LuaArray<PlayerChoiceRewardCurrencyInfo>;
    repRewards: LuaArray<PlayerChoiceRewardReputationInfo>
}
export interface PlayerChoiceRewardItemInfo {
    itemId: number;
    name: string;
    quality: number;
    textureFileId: number;
    quantity: number;
    itemLink: string
}
export interface PlayerChoiceRewardReputationInfo {
    factionId: number;
    quantity: number
}
export const C_PlayerChoice = {
    GetPlayerChoiceInfo: (): PlayerChoiceInfo => {return {choiceID: 0, questionText: '', numOptions: 0, uiTextureKit: '', soundKitID: 0, hideWarboardHeader: false, keepOpenAfterChoice: false}},
    GetPlayerChoiceOptionInfo: (optionIndex: number): PlayerChoiceOptionInfo => {return {id: 0, responseIdentifier: 0, buttonText: '', description: '', header: '', choiceArtID: 0, confirmation: '', widgetSetID: 0, disabledButton: false, desaturatedArt: false, disabledOption: false, groupID: 0, headerIconAtlasElement: '', subHeader: '', buttonTooltip: '', rewardQuestID: 0, soundKitID: 0, hasRewards: false, rarity: PlayerChoiceRarity.Common, rarityColor: {} as any, typeArtID: 0, uiTextureKit: '', spellID: 0, maxStacks: 0}},
    GetPlayerChoiceRewardInfo: (rewardIndex: number): PlayerChoiceRewardInfo => {return {money: 0, xp: 0, itemRewards: {} as any, currencyRewards: {} as any, repRewards: {} as any}},
    IsWaitingForPlayerChoiceResponse: (): boolean => {return false},
};
export type PlayerChoiceCloseEvent = (frame: UIFrame, e: "PLAYER_CHOICE_CLOSE") => void
export type PlayerChoiceUpdateEvent = (frame: UIFrame, e: "PLAYER_CHOICE_UPDATE") => void