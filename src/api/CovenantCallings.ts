import { UIFrame } from "../ui";

export const C_CovenantCallings = {
    AreCallingsUnlocked: (): boolean => {return false},
    RequestCallings: (): void => {},
};
export type CovenantCallingsUpdatedEvent = (frame: UIFrame, e: "COVENANT_CALLINGS_UPDATED", callings: any) => void