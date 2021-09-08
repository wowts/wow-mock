import { test, expect } from "@jest/globals";
import { C_Soulbinds } from ".";

test("GetConduitCollection", () => {
    expect(C_Soulbinds.GetConduitCollection(0)).toEqual({});
});
