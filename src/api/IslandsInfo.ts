import { UIFrame } from "../ui";

export const C_IslandsInfo = {

};
export type IslandAzeriteGainEvent = (frame: UIFrame, e: "ISLAND_AZERITE_GAIN", amount: number, gainedByPlayer: boolean, factionIndex: number, gainedBy: string, gainedFrom: string) => void