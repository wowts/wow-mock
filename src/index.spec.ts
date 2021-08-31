import { test, expect } from "@jest/globals";
import { GetUnitName, UnitName } from ".";

test("GetUnitName for player returns the player's name", () => {
    expect(GetUnitName("player", false)).toBe("Player");
});

test("GetUnitName for target returns the target's name and realm", () => {
    expect(GetUnitName("target", true)).toBe("Target-TargetRealm");
});

test("UnitName for player returns the player's name and no realm", () => {
    const [name, realm] = UnitName("player");
    expect(name).toBe("Player");
    expect(realm).toBe(undefined);
});

test("UnitName for target returns the targets's name and realm", () => {
    const [name, realm] = UnitName("target");
    expect(name).toBe("Target");
    expect(realm).toBe("TargetRealm");
});
