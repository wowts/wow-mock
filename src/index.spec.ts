import { test, expect } from "@jest/globals";
import { GetUnitName } from ".";

test("GetUnitName for player returns the player's name", () => {
    expect(GetUnitName("player", false)).toBe("Player");
});
