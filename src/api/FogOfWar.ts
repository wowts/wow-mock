import { UIFrame } from "../ui";
export interface FogOfWarInfo {
    fogOfWarID: number;
    backgroundAtlas: string;
    maskAtlas: string;
    maskScalar: number
}
export const C_FogOfWar = {
    GetFogOfWarForMap: (uiMapID: number): number | undefined => {return 0},
    GetFogOfWarInfo: (fogOfWarID: number): FogOfWarInfo | undefined => {return {fogOfWarID: 0, backgroundAtlas: '', maskAtlas: '', maskScalar: 0}},
};
export type FogOfWarUpdatedEvent = (frame: UIFrame, e: "FOG_OF_WAR_UPDATED") => void