import { UIFrame } from "../ui";

export const C_Spell = {
    DoesSpellExist: (spellID: number): boolean => {
        return false;
    },
    GetMawPowerBorderAtlasBySpellID: (spellID: number): string => {
        return "";
    },
    IsSpellDataCached: (spellID: number): boolean => {
        return false;
    },
    RequestLoadSpellData: (spellID: number): void => {},
};
export type SpellDataLoadResultEvent = (
    frame: UIFrame,
    e: "SPELL_DATA_LOAD_RESULT",
    spellID: number,
    success: boolean
) => void;
