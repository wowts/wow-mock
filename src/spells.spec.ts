import { expect, test } from "@jest/globals";
import { SpellId } from "./spells";

test("spells", () => {
    expect(SpellId.agony).toBe(980);
    expect(SpellId.judgment).toBe(20271);
    expect(SpellId.judgment_holy).toBe(275773);
    expect(SpellId.judgment_protection).toBe(275779);
});
