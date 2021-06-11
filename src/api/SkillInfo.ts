import { UIFrame } from "../ui";

export const C_SkillInfo = {};
export type SkillLinesChangedEvent = (
    frame: UIFrame,
    e: "SKILL_LINES_CHANGED"
) => void;
