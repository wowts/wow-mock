import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum CovenantAbilityType {
    Class = 0,
    Signature = 1,
    Soulbind = 2,
}
export interface CovenantAbilityInfo {
    spellID: number;
    type: CovenantAbilityType;
}
export interface CovenantFeatureInfo {
    name: string;
    description: string;
    texture: number;
}
export interface CovenantPreviewInfo {
    textureKit: string;
    transmogSetID: number;
    mountID: number;
    covenantName: string;
    covenantZone: string;
    description: string;
    covenantCrest: string;
    covenantAbilities: LuaArray<CovenantAbilityInfo>;
    fromPlayerChoice: boolean;
    covenantSoulbinds: LuaArray<CovenantSoulbindInfo>;
    featureInfo: CovenantFeatureInfo;
}
export interface CovenantSoulbindInfo {
    spellID: number;
    uiTextureKit: string;
    name: string;
    description: string;
}
export const C_CovenantPreview = {
    CloseFromUI: (): void => {},
    GetCovenantInfoForPlayerChoiceResponseID: (
        playerChoiceResponseID: number
    ): CovenantPreviewInfo => {
        return {
            textureKit: "",
            transmogSetID: 0,
            mountID: 0,
            covenantName: "",
            covenantZone: "",
            description: "",
            covenantCrest: "",
            covenantAbilities: {} as any,
            fromPlayerChoice: false,
            covenantSoulbinds: {} as any,
            featureInfo: { name: "", description: "", texture: 0 },
        };
    },
};
export type CovenantPreviewCloseEvent = (
    frame: UIFrame,
    e: "COVENANT_PREVIEW_CLOSE"
) => void;
export type CovenantPreviewOpenEvent = (
    frame: UIFrame,
    e: "COVENANT_PREVIEW_OPEN",
    previewInfo: CovenantPreviewInfo
) => void;
