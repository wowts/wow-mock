import { ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum PlayerChoiceRarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2,
    Epic = 3,
}
export interface PlayerChoiceInfo {
    choiceID: number;
    questionText: string;
    uiTextureKit: string;
    hideWarboardHeader: boolean;
    keepOpenAfterChoice: boolean;
    options: LuaArray<PlayerChoiceOptionInfo>;
    soundKitID: number | undefined;
}
export interface PlayerChoiceOptionButtonInfo {
    id: number;
    text: string;
    disabled: boolean;
    confirmation: string | undefined;
    tooltip: string | undefined;
    rewardQuestID: number | undefined;
    soundKitID: number | undefined;
}
export interface PlayerChoiceOptionInfo {
    id: number;
    description: string;
    header: string;
    choiceArtID: number;
    desaturatedArt: boolean;
    disabledOption: boolean;
    hasRewards: boolean;
    rewardInfo: PlayerChoiceOptionRewardInfo;
    rarity: PlayerChoiceRarity;
    uiTextureKit: string;
    maxStacks: number;
    buttons: LuaArray<PlayerChoiceOptionButtonInfo>;
    widgetSetID: number | undefined;
    spellID: number | undefined;
    rarityColor: ColorMixin | undefined;
    typeArtID: number | undefined;
    headerIconAtlasElement: string | undefined;
    subHeader: string | undefined;
}
export interface PlayerChoiceOptionRewardInfo {
    currencyRewards: LuaArray<PlayerChoiceRewardCurrencyInfo>;
    itemRewards: LuaArray<PlayerChoiceRewardItemInfo>;
    repRewards: LuaArray<PlayerChoiceRewardReputationInfo>;
}
export interface PlayerChoiceRewardCurrencyInfo {
    currencyId: number;
    name: string;
    currencyTexture: number;
    quantity: number;
    isCurrencyContainer: boolean;
}
export interface PlayerChoiceRewardItemInfo {
    itemId: number;
    name: string;
    quantity: number;
}
export interface PlayerChoiceRewardReputationInfo {
    factionId: number;
    quantity: number;
}
export const C_PlayerChoice = {
    GetCurrentPlayerChoiceInfo: (): PlayerChoiceInfo => {
        return {
            choiceID: 0,
            questionText: "",
            uiTextureKit: "",
            hideWarboardHeader: false,
            keepOpenAfterChoice: false,
            options: {} as any,
            soundKitID: 0,
        };
    },
    GetNumRerolls: (): number => {
        return 0;
    },
    IsWaitingForPlayerChoiceResponse: (): boolean => {
        return false;
    },
    OnUIClosed: (): void => {},
    RequestRerollPlayerChoice: (): void => {},
    SendPlayerChoiceResponse: (responseID: number): void => {},
};
export type PlayerChoiceCloseEvent = (
    frame: UIFrame,
    e: "PLAYER_CHOICE_CLOSE"
) => void;
export type PlayerChoiceUpdateEvent = (
    frame: UIFrame,
    e: "PLAYER_CHOICE_UPDATE"
) => void;
