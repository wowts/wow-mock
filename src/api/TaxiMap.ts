import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum FlightPathFaction {
    Neutral = 0,
    Horde = 1,
    Alliance = 2,
}
export const enum FlightPathState {
    Current = 0,
    Reachable = 1,
    Unreachable = 2,
}
export interface MapTaxiNodeInfo {
    nodeID: number;
    position: Vector2DMixin;
    name: string;
    atlasName: string;
    faction: FlightPathFaction;
    textureKit: string;
}
export interface TaxiNodeInfo {
    nodeID: number;
    position: Vector2DMixin;
    name: string;
    state: FlightPathState;
    slotIndex: number;
    textureKit: string;
}
export const C_TaxiMap = {
    GetAllTaxiNodes: (uiMapID: number): LuaArray<TaxiNodeInfo> => {
        return {} as any;
    },
    GetTaxiNodesForMap: (uiMapID: number): LuaArray<MapTaxiNodeInfo> => {
        return {} as any;
    },
    ShouldMapShowTaxiNodes: (uiMapID: number): boolean => {
        return false;
    },
};
export type TaximapClosedEvent = (frame: UIFrame, e: "TAXIMAP_CLOSED") => void;
export type TaximapOpenedEvent = (
    frame: UIFrame,
    e: "TAXIMAP_OPENED",
    system: number
) => void;
