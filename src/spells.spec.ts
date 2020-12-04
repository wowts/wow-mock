import test from "ava";
import { SpellId } from "./spells";

test("spells", (t) => {
    t.is(SpellId.agony, 980);
});
