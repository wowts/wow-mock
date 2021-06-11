import { UIFrame } from "../ui";

export const C_StableInfo = {
    GetNumActivePets: (): number => {
        return 0;
    },
    GetNumStablePets: (): number => {
        return 0;
    },
};
export type PetStableClosedEvent = (
    frame: UIFrame,
    e: "PET_STABLE_CLOSED"
) => void;
export type PetStableShowEvent = (frame: UIFrame, e: "PET_STABLE_SHOW") => void;
export type PetStableUpdateEvent = (
    frame: UIFrame,
    e: "PET_STABLE_UPDATE"
) => void;
export type PetStableUpdatePaperdollEvent = (
    frame: UIFrame,
    e: "PET_STABLE_UPDATE_PAPERDOLL"
) => void;
