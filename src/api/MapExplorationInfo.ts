import { Vector2DMixin } from '../mixins';
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
    fileDataIDs: any;
    hitRect: UiMapExplorationHitRect
}
export const C_MapExplorationInfo = {
    GetExploredAreaIDsAtPosition: (uiMapID: number, normalizedPosition: Vector2DMixin): any | undefined => {return {} as any},
    GetExploredMapTextures: (uiMapID: number): any => {return {} as any},
};
export type MapExplorationUpdatedEvent = (frame: UIFrame, e: "MAP_EXPLORATION_UPDATED") => void