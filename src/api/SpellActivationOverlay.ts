import { UIFrame } from "../ui";

export const C_SpellActivationOverlay = {};
export type SpellActivationOverlayGlowHideEvent = (
    frame: UIFrame,
    e: "SPELL_ACTIVATION_OVERLAY_GLOW_HIDE",
    spellID: number
) => void;
export type SpellActivationOverlayGlowShowEvent = (
    frame: UIFrame,
    e: "SPELL_ACTIVATION_OVERLAY_GLOW_SHOW",
    spellID: number
) => void;
export type SpellActivationOverlayHideEvent = (
    frame: UIFrame,
    e: "SPELL_ACTIVATION_OVERLAY_HIDE",
    spellID: number | undefined
) => void;
export type SpellActivationOverlayShowEvent = (
    frame: UIFrame,
    e: "SPELL_ACTIVATION_OVERLAY_SHOW",
    spellID: number,
    overlayFileDataID: number,
    locationName: string,
    scale: number,
    r: number,
    g: number,
    b: number
) => void;
