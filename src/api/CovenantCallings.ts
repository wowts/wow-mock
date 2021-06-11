import { BountyInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_CovenantCallings = {
    AreCallingsUnlocked: (): boolean => {
        return false;
    },
    RequestCallings: (): void => {},
};
export type CovenantCallingsUpdatedEvent = (
    frame: UIFrame,
    e: "COVENANT_CALLINGS_UPDATED",
    callings: LuaArray<BountyInfo>
) => void;
