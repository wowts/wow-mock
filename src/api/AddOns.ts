import { UIFrame } from "../ui";

export const C_AddOns = {};
export type AddonLoadedEvent = (
    frame: UIFrame,
    e: "ADDON_LOADED",
    addOnName: string
) => void;
export type AddonsUnloadingEvent = (
    frame: UIFrame,
    e: "ADDONS_UNLOADING",
    closingClient: boolean
) => void;
export type SavedVariablesTooLargeEvent = (
    frame: UIFrame,
    e: "SAVED_VARIABLES_TOO_LARGE",
    addOnName: string
) => void;
