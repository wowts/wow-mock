import { UIFrame } from "../ui";
export interface CovenantData {
    ID: number;
    textureKit: string;
    celebrationSoundKit: number;
    animaChannelSelectSoundKit: number;
    animaChannelActiveSoundKit: number;
    animaGemsFullSoundKit: number;
    animaNewGemSoundKit: number;
    animaReinforceSelectSoundKit: number;
    name: string;
    soulbindIDs: any
}
export const C_Covenants = {
    GetActiveCovenantID: (): number => {return 0},
    GetCovenantData: (covenantID: number): CovenantData | undefined => {return {ID: 0, textureKit: '', celebrationSoundKit: 0, animaChannelSelectSoundKit: 0, animaChannelActiveSoundKit: 0, animaGemsFullSoundKit: 0, animaNewGemSoundKit: 0, animaReinforceSelectSoundKit: 0, name: '', soulbindIDs: {} as any}},
    GetCovenantIDs: (): any => {return {} as any},
};
export type CovenantChosenEvent = (frame: UIFrame, e: "COVENANT_CHOSEN", covenantID: number) => void