import { UIFrame } from "../ui";
export interface AtlasInfo {
    width: number;
    height: number;
    leftTexCoord: number;
    rightTexCoord: number;
    topTexCoord: number;
    bottomTexCoord: number;
    tilesHorizontally: boolean;
    tilesVertically: boolean;
    file: number | undefined;
    filename: string | undefined
}
export const C_Texture = {
    GetAtlasInfo: (atlas: string): AtlasInfo => {return {width: 0, height: 0, leftTexCoord: 0, rightTexCoord: 0, topTexCoord: 0, bottomTexCoord: 0, tilesHorizontally: false, tilesVertically: false, file: 0, filename: ''}},
};
