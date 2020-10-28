import { UIFrame } from "../ui";

export const C_StorePublic = {
    DoesGroupHavePurchaseableProducts: (groupID: number): boolean => {return false},
    IsDisabledByParentalControls: (): boolean => {return false},
    IsEnabled: (): boolean => {return false},
};
