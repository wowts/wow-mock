import { Vector2DMixin } from '../mixins';
import { UIFrame } from "../ui";
export const enum VignetteType {
    Normal = 0,
    PvPBounty = 1,
    Torghast = 2,
    Treasure = 3
}
export interface VignetteInfo {
    vignetteGUID: string;
    objectGUID: string;
    name: string;
    isDead: boolean;
    onWorldMap: boolean;
    zoneInfiniteAOI: boolean;
    onMinimap: boolean;
    isUnique: boolean;
    inFogOfWar: boolean;
    atlasName: string;
    hasTooltip: boolean;
    vignetteID: number;
    type: VignetteType;
    rewardQuestID: number;
    widgetSetID: number | undefined
}
export const C_VignetteInfo = {
    FindBestUniqueVignette: (vignetteGUIDs: any): number | undefined => {return 0},
    GetVignetteInfo: (vignetteGUID: string): VignetteInfo | undefined => {return {vignetteGUID: '', objectGUID: '', name: '', isDead: false, onWorldMap: false, zoneInfiniteAOI: false, onMinimap: false, isUnique: false, inFogOfWar: false, atlasName: '', hasTooltip: false, vignetteID: 0, type: VignetteType.Normal, rewardQuestID: 0, widgetSetID: 0}},
    GetVignettePosition: (vignetteGUID: string, uiMapID: number): Vector2DMixin | undefined => {return {} as any},
    GetVignettes: (): any => {return {} as any},
};
export type VignetteMinimapUpdatedEvent = (frame: UIFrame, e: "VIGNETTE_MINIMAP_UPDATED", vignetteGUID: string, onMinimap: boolean) => void
export type VignettesUpdatedEvent = (frame: UIFrame, e: "VIGNETTES_UPDATED") => void