import { UIFrame } from "../ui";

export const C_Minimap = {
    GetDrawGroundTextures: (): boolean => {return false},
    GetUiMapID: (): number | undefined => {return 0},
    GetViewRadius: (): number => {return 0},
    IsRotateMinimapIgnored: (): boolean => {return false},
    SetDrawGroundTextures: (draw: boolean): void => {},
    SetIgnoreRotateMinimap: (ignore: boolean): void => {},
    ShouldUseHybridMinimap: (): boolean => {return false},
};
export type MinimapPingEvent = (frame: UIFrame, e: "MINIMAP_PING", unitTarget: string, y: number, x: number) => void
export type MinimapUpdateTrackingEvent = (frame: UIFrame, e: "MINIMAP_UPDATE_TRACKING") => void
export type MinimapUpdateZoomEvent = (frame: UIFrame, e: "MINIMAP_UPDATE_ZOOM") => void