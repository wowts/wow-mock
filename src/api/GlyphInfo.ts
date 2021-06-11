import { UIFrame } from "../ui";

export const C_GlyphInfo = {};
export type ActivateGlyphEvent = (
    frame: UIFrame,
    e: "ACTIVATE_GLYPH",
    spellID: number
) => void;
export type CancelGlyphCastEvent = (
    frame: UIFrame,
    e: "CANCEL_GLYPH_CAST"
) => void;
export type UseGlyphEvent = (
    frame: UIFrame,
    e: "USE_GLYPH",
    spellID: number
) => void;
