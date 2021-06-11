import { ItemQuality } from "./common";
import { UIFrame } from "../ui";
export interface BackpackCurrencyInfo {
    name: string;
    quantity: number;
    iconFileID: number;
    currencyTypesID: number;
}
export interface CurrencyDisplayInfo {
    name: string;
    description: string;
    icon: number;
    quality: number;
    displayAmount: number;
    actualAmount: number;
}
export interface CurrencyInfo {
    name: string;
    isHeader: boolean;
    isHeaderExpanded: boolean;
    isTypeUnused: boolean;
    isShowInBackpack: boolean;
    quantity: number;
    iconFileID: number;
    maxQuantity: number;
    canEarnPerWeek: boolean;
    quantityEarnedThisWeek: number;
    isTradeable: boolean;
    quality: ItemQuality;
    maxWeeklyQuantity: number;
    discovered: boolean;
}
export const C_CurrencyInfo = {
    DoesWarModeBonusApply: (
        currencyID: number
    ): [
        warModeApplies: boolean | undefined,
        limitOncePerTooltip: boolean | undefined
    ] => {
        return [false, false];
    },
    ExpandCurrencyList: (index: number, expand: boolean): void => {},
    GetAzeriteCurrencyID: (): number => {
        return 0;
    },
    GetBackpackCurrencyInfo: (index: number): BackpackCurrencyInfo => {
        return { name: "", quantity: 0, iconFileID: 0, currencyTypesID: 0 };
    },
    GetBasicCurrencyInfo: (
        currencyType: number,
        quantity: number | undefined
    ): CurrencyDisplayInfo => {
        return {
            name: "",
            description: "",
            icon: 0,
            quality: 0,
            displayAmount: 0,
            actualAmount: 0,
        };
    },
    GetCurrencyContainerInfo: (
        currencyType: number,
        quantity: number
    ): CurrencyDisplayInfo => {
        return {
            name: "",
            description: "",
            icon: 0,
            quality: 0,
            displayAmount: 0,
            actualAmount: 0,
        };
    },
    GetCurrencyIDFromLink: (currencyLink: string): number => {
        return 0;
    },
    GetCurrencyInfo: (type: number): CurrencyInfo => {
        return {
            name: "",
            isHeader: false,
            isHeaderExpanded: false,
            isTypeUnused: false,
            isShowInBackpack: false,
            quantity: 0,
            iconFileID: 0,
            maxQuantity: 0,
            canEarnPerWeek: false,
            quantityEarnedThisWeek: 0,
            isTradeable: false,
            quality: ItemQuality.Poor,
            maxWeeklyQuantity: 0,
            discovered: false,
        };
    },
    GetCurrencyInfoFromLink: (link: string): CurrencyInfo => {
        return {
            name: "",
            isHeader: false,
            isHeaderExpanded: false,
            isTypeUnused: false,
            isShowInBackpack: false,
            quantity: 0,
            iconFileID: 0,
            maxQuantity: 0,
            canEarnPerWeek: false,
            quantityEarnedThisWeek: 0,
            isTradeable: false,
            quality: ItemQuality.Poor,
            maxWeeklyQuantity: 0,
            discovered: false,
        };
    },
    GetCurrencyLink: (type: number, amount: number): string => {
        return "";
    },
    GetCurrencyListInfo: (index: number): CurrencyInfo => {
        return {
            name: "",
            isHeader: false,
            isHeaderExpanded: false,
            isTypeUnused: false,
            isShowInBackpack: false,
            quantity: 0,
            iconFileID: 0,
            maxQuantity: 0,
            canEarnPerWeek: false,
            quantityEarnedThisWeek: 0,
            isTradeable: false,
            quality: ItemQuality.Poor,
            maxWeeklyQuantity: 0,
            discovered: false,
        };
    },
    GetCurrencyListLink: (index: number): string => {
        return "";
    },
    GetCurrencyListSize: (): number => {
        return 0;
    },
    GetFactionGrantedByCurrency: (currencyID: number): number | undefined => {
        return 0;
    },
    GetWarResourcesCurrencyID: (): number => {
        return 0;
    },
    IsCurrencyContainer: (currencyID: number, quantity: number): boolean => {
        return false;
    },
    PickupCurrency: (type: number): void => {},
    SetCurrencyBackpack: (index: number, backpack: boolean): void => {},
    SetCurrencyUnused: (index: number, unused: boolean): void => {},
};
export type CurrencyDisplayUpdateEvent = (
    frame: UIFrame,
    e: "CURRENCY_DISPLAY_UPDATE",
    currencyType: number | undefined,
    quantity: number | undefined,
    quantityChange: number | undefined,
    quantityGainSource: number | undefined,
    quantityLostSource: number | undefined
) => void;
export type PlayerMoneyEvent = (frame: UIFrame, e: "PLAYER_MONEY") => void;
