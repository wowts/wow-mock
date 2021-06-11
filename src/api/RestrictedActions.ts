import { UIFrame } from "../ui";

export const C_RestrictedActions = {};
export type AddonActionBlockedEvent = (
    frame: UIFrame,
    e: "ADDON_ACTION_BLOCKED",
    isTainted: string,
    func: string
) => void;
export type AddonActionForbiddenEvent = (
    frame: UIFrame,
    e: "ADDON_ACTION_FORBIDDEN",
    isTainted: string,
    func: string
) => void;
export type MacroActionBlockedEvent = (
    frame: UIFrame,
    e: "MACRO_ACTION_BLOCKED",
    func: string
) => void;
export type MacroActionForbiddenEvent = (
    frame: UIFrame,
    e: "MACRO_ACTION_FORBIDDEN",
    func: string
) => void;
