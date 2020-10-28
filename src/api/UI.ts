import { UIFrame } from "../ui";

export const C_UI = {
    Reload: (): void => {},
};
export type UiScaleChangedEvent = (frame: UIFrame, e: "UI_SCALE_CHANGED") => void