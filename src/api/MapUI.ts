import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum MapCanvasPosition {
    None = 0,
    BottomLeft = 1,
    BottomRight = 2,
    TopLeft = 3,
    TopRight = 4,
}
export const enum UIMapFlag {
    NoHighlight = 1,
    ShowOverlays = 2,
    ShowTaxiNodes = 4,
    GarrisonMap = 8,
    FallbackToParentMap = 16,
    NoHighlightTexture = 32,
    ShowTaskObjectives = 64,
    NoWorldPositions = 128,
    HideArchaeologyDigs = 256,
    Deprecated = 512,
    HideIcons = 1024,
    HideVignettes = 2048,
    ForceAllOverlayExplored = 4096,
    FlightMapShowZoomOut = 8192,
    FlightMapAutoZoom = 16384,
    ForceOnNavbar = 32768,
    AlwaysAllowUserWaypoints = 65536,
}
export const enum UIMapSystem {
    World = 0,
    Taxi = 1,
    Adventure = 2,
    Minimap = 3,
}
export const enum UIMapType {
    Cosmic = 0,
    World = 1,
    Continent = 2,
    Zone = 3,
    Dungeon = 4,
    Micro = 5,
    Orphan = 6,
}
export interface MapBannerInfo {
    areaPoiID: number;
    name: string;
    atlasName: string;
    uiTextureKit: string | undefined;
}
export interface MapLinkInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    atlasName: string;
    linkedUiMapID: number;
}
export interface UiMapDetails {
    mapID: number;
    name: string;
    mapType: UIMapType;
    parentMapID: number;
    flags: number;
}
export interface UiMapGroupMemberInfo {
    mapID: number;
    relativeHeightIndex: number;
    name: string;
}
export interface UiMapLayerInfo {
    layerWidth: number;
    layerHeight: number;
    tileWidth: number;
    tileHeight: number;
    minScale: number;
    maxScale: number;
    additionalZoomSteps: number;
}
export const C_Map = {
    CanSetUserWaypointOnMap: (uiMapID: number): boolean => {
        return false;
    },
    ClearUserWaypoint: (): void => {},
    CloseWorldMapInteraction: (): void => {},
    GetAreaInfo: (areaID: number): string => {
        return "";
    },
    GetBestMapForUnit: (unitToken: string): number | undefined => {
        return 0;
    },
    GetBountySetMaps: (bountySetID: number): LuaArray<number> => {
        return {} as any;
    },
    GetFallbackWorldMapID: (): number => {
        return 0;
    },
    GetMapArtBackgroundAtlas: (uiMapID: number): string => {
        return "";
    },
    GetMapArtHelpTextPosition: (uiMapID: number): MapCanvasPosition => {
        return MapCanvasPosition.None;
    },
    GetMapArtID: (uiMapID: number): number => {
        return 0;
    },
    GetMapArtLayerTextures: (
        uiMapID: number,
        layerIndex: number
    ): LuaArray<number> => {
        return {} as any;
    },
    GetMapArtLayers: (uiMapID: number): LuaArray<UiMapLayerInfo> => {
        return {} as any;
    },
    GetMapBannersForMap: (uiMapID: number): LuaArray<MapBannerInfo> => {
        return {} as any;
    },
    GetMapChildrenInfo: (
        uiMapID: number,
        mapType: UIMapType | undefined,
        allDescendants: boolean | undefined
    ): LuaArray<UiMapDetails> => {
        return {} as any;
    },
    GetMapDisplayInfo: (uiMapID: number): boolean => {
        return false;
    },
    GetMapGroupID: (uiMapID: number): number => {
        return 0;
    },
    GetMapGroupMembersInfo: (
        uiMapGroupID: number
    ): LuaArray<UiMapGroupMemberInfo> => {
        return {} as any;
    },
    GetMapHighlightInfoAtPosition: (
        uiMapID: number,
        x: number,
        y: number
    ): [
        fileDataID: number,
        atlasID: string,
        texturePercentageX: number,
        texturePercentageY: number,
        textureX: number,
        textureY: number,
        scrollChildX: number,
        scrollChildY: number
    ] => {
        return [0, "", 0, 0, 0, 0, 0, 0];
    },
    GetMapInfo: (uiMapID: number): UiMapDetails => {
        return {
            mapID: 0,
            name: "",
            mapType: UIMapType.Cosmic,
            parentMapID: 0,
            flags: 0,
        };
    },
    GetMapInfoAtPosition: (
        uiMapID: number,
        x: number,
        y: number
    ): UiMapDetails => {
        return {
            mapID: 0,
            name: "",
            mapType: UIMapType.Cosmic,
            parentMapID: 0,
            flags: 0,
        };
    },
    GetMapLevels: (
        uiMapID: number
    ): [
        playerMinLevel: number,
        playerMaxLevel: number,
        petMinLevel: number,
        petMaxLevel: number
    ] => {
        return [0, 0, 0, 0];
    },
    GetMapLinksForMap: (uiMapID: number): LuaArray<MapLinkInfo> => {
        return {} as any;
    },
    GetMapPosFromWorldPos: (
        continentID: number,
        worldPosition: Vector2DMixin,
        overrideUiMapID: number | undefined
    ): [uiMapID: number, mapPosition: Vector2DMixin] => {
        return [0, {} as any];
    },
    GetMapRectOnMap: (
        uiMapID: number,
        topUiMapID: number
    ): [minX: number, maxX: number, minY: number, maxY: number] => {
        return [0, 0, 0, 0];
    },
    GetMapWorldSize: (uiMapID: number): [width: number, height: number] => {
        return [0, 0];
    },
    GetPlayerMapPosition: (
        uiMapID: number,
        unitToken: string
    ): Vector2DMixin | undefined => {
        return {} as any;
    },
    GetUserWaypoint: (): any => {
        return {} as any;
    },
    GetUserWaypointFromHyperlink: (hyperlink: string): any => {
        return {} as any;
    },
    GetUserWaypointHyperlink: (): string => {
        return "";
    },
    GetUserWaypointPositionForMap: (uiMapID: number): Vector2DMixin => {
        return {} as any;
    },
    GetWorldPosFromMapPos: (
        uiMapID: number,
        mapPosition: Vector2DMixin
    ): [continentID: number, worldPosition: Vector2DMixin] => {
        return [0, {} as any];
    },
    HasUserWaypoint: (): boolean => {
        return false;
    },
    IsMapValidForNavBarDropDown: (uiMapID: number): boolean => {
        return false;
    },
    MapHasArt: (uiMapID: number): boolean => {
        return false;
    },
    RequestPreloadMap: (uiMapID: number): void => {},
    SetUserWaypoint: (point: any): void => {},
};
export type NewWmoChunkEvent = (frame: UIFrame, e: "NEW_WMO_CHUNK") => void;
export type UserWaypointUpdatedEvent = (
    frame: UIFrame,
    e: "USER_WAYPOINT_UPDATED"
) => void;
export type WorldMapCloseEvent = (frame: UIFrame, e: "WORLD_MAP_CLOSE") => void;
export type WorldMapOpenEvent = (
    frame: UIFrame,
    e: "WORLD_MAP_OPEN",
    uiMapID: number
) => void;
export type ZoneChangedEvent = (frame: UIFrame, e: "ZONE_CHANGED") => void;
export type ZoneChangedIndoorsEvent = (
    frame: UIFrame,
    e: "ZONE_CHANGED_INDOORS"
) => void;
export type ZoneChangedNewAreaEvent = (
    frame: UIFrame,
    e: "ZONE_CHANGED_NEW_AREA"
) => void;
