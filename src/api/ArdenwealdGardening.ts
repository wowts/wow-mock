import { UIFrame } from "../ui";
export interface ArdenwealdGardenData {
    active: number;
    ready: number;
    remainingSeconds: number;
}
export const C_ArdenwealdGardening = {
    GetGardenData: (): ArdenwealdGardenData => {
        return { active: 0, ready: 0, remainingSeconds: 0 };
    },
    IsGardenAccessible: (): boolean => {
        return false;
    },
};
