import { UIFrame } from "../ui";
export interface ChromieTimeExpansionInfo {
    id: number;
    name: string;
    description: string;
    mapAtlas: string;
    previewAtlas: string;
    completed: boolean;
    alreadyOn: boolean
}
export const C_ChromieTime = {
    CloseUI: (): void => {},
    GetChromieTimeExpansionOption: (expansionRecID: number): ChromieTimeExpansionInfo | undefined => {return {id: 0, name: '', description: '', mapAtlas: '', previewAtlas: '', completed: false, alreadyOn: false}},
    GetChromieTimeExpansionOptions: (): any => {return {} as any},
    SelectChromieTimeOption: (chromieTimeExpansionInfoId: number): void => {},
};
export type ChromieTimeCloseEvent = (frame: UIFrame, e: "CHROMIE_TIME_CLOSE") => void
export type ChromieTimeOpenEvent = (frame: UIFrame, e: "CHROMIE_TIME_OPEN") => void