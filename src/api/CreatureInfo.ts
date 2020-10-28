import { UIFrame } from "../ui";
export interface ClassInfo {
    className: string;
    classFile: string;
    classID: number
}
export interface FactionInfo {
    name: string;
    groupTag: string
}
export interface RaceInfo {
    raceName: string;
    clientFileString: string;
    raceID: number
}
export const C_CreatureInfo = {
    GetClassInfo: (classID: number): ClassInfo | undefined => {return {className: '', classFile: '', classID: 0}},
    GetFactionInfo: (raceID: number): FactionInfo | undefined => {return {name: '', groupTag: ''}},
    GetRaceInfo: (raceID: number): RaceInfo | undefined => {return {raceName: '', clientFileString: '', raceID: 0}},
};
