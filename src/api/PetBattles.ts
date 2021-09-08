import { UIFrame } from "../ui";

export const C_PetBattles = {
    GetBreedQuality: (petOwner: number, slot: number): number => {
        return 0;
    },
    GetIcon: (petOwner: number, slot: number): number => {
        return 0;
    },
    GetName: (
        petOwner: number,
        slot: number
    ): [customName: string, speciesName: string] => {
        return ["", ""];
    },
    IsPlayerNPC: (): boolean => {
        return false;
    },
    IsWildBattle: (): boolean => {
        return false;
    },
};
