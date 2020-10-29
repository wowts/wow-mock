import { Vector2DMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface AreaPOIInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    description: string | undefined;
    textureIndex: number | undefined;
    widgetSetID: number | undefined;
    atlasName: string | undefined;
    uiTextureKit: string | undefined
}
export const C_AreaPoiInfo = {
    GetAreaPOIForMap: (uiMapID: number): LuaArray<number> => {return {} as any},
    GetAreaPOIInfo: (uiMapID: number, areaPoiID: number): AreaPOIInfo => {return {areaPoiID: 0, position: {} as any, name: '', description: '', textureIndex: 0, widgetSetID: 0, atlasName: '', uiTextureKit: ''}},
    GetAreaPOISecondsLeft: (areaPoiID: number): number => {return 0},
    IsAreaPOITimed: (areaPoiID: number): boolean => {return false},
};
export type AreaPoisUpdatedEvent = (frame: UIFrame, e: "AREA_POIS_UPDATED") => void