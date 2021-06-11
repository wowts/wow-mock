import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface PetTamerMapInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    atlasName: string | undefined;
    textureIndex: number | undefined;
}
export const C_PetInfo = {
    GetPetTamersForMap: (uiMapID: number): LuaArray<PetTamerMapInfo> => {
        return {} as any;
    },
};
export type PetAttackStartEvent = (
    frame: UIFrame,
    e: "PET_ATTACK_START"
) => void;
export type PetAttackStopEvent = (frame: UIFrame, e: "PET_ATTACK_STOP") => void;
export type PetBarHidegridEvent = (
    frame: UIFrame,
    e: "PET_BAR_HIDEGRID"
) => void;
export type PetBarShowgridEvent = (
    frame: UIFrame,
    e: "PET_BAR_SHOWGRID"
) => void;
export type PetBarUpdateCooldownEvent = (
    frame: UIFrame,
    e: "PET_BAR_UPDATE_COOLDOWN"
) => void;
export type PetDismissStartEvent = (
    frame: UIFrame,
    e: "PET_DISMISS_START",
    delay: number
) => void;
export type PetForceNameDeclensionEvent = (
    frame: UIFrame,
    e: "PET_FORCE_NAME_DECLENSION",
    name: string,
    declinedName1: string | undefined,
    declinedName2: string | undefined,
    declinedName3: string | undefined,
    declinedName4: string | undefined,
    declinedName5: string | undefined
) => void;
export type PetUiCloseEvent = (frame: UIFrame, e: "PET_UI_CLOSE") => void;
export type RaisedAsGhoulEvent = (frame: UIFrame, e: "RAISED_AS_GHOUL") => void;
export type UpdatePossessBarEvent = (
    frame: UIFrame,
    e: "UPDATE_POSSESS_BAR"
) => void;
export type UpdateVehicleActionbarEvent = (
    frame: UIFrame,
    e: "UPDATE_VEHICLE_ACTIONBAR"
) => void;
