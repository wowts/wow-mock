import { Vector2DMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface UiMapExplorationHitRect {
    top: number;
    bottom: number;
    left: number;
    right: number
}
export interface UiMapExplorationInfo {
    textureWidth: number;
    textureHeight: number;
    offsetX: number;
    offsetY: number;
    isShownByMouseOver: boolean;
    fileDataIDs: LuaArray<number>;
    hitRect: UiMapExplorationHitRect
}
export const C_MapExplorationInfo = {
    GetExploredAreaIDsAtPosition: (uiMapID: number, normalizedPosition: Vector2DMixin): LuaArray<number> | undefined => {return {} as any},
    GetExploredMapTextures: (uiMapID: number): LuaArray<UiMapExplorationInfo> => {return {} as any},
};
export type MapExplorationUpdatedEvent = (frame: UIFrame, e: "MAP_EXPLORATION_UPDATED") => void