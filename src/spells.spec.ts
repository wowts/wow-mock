import test from "ava";
import { SpellId } from "./spells";

test("spells", (t) => {
    t.is(SpellId.agony, 980);
    t.is(SpellId.judgment, 20271);
    t.is(SpellId.judgment_holy, 275773);
    t.is(SpellId.judgment_protection, 275779);
});
