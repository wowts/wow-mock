import { UIFrame } from "../ui";
export const enum WoWEntitlementType {
    Item = 0,
    Mount = 1,
    Battlepet = 2,
    Toy = 3,
    Appearance = 4,
    AppearanceSet = 5,
    GameTime = 6,
    Title = 7,
    Illusion = 8,
    Invalid = 9
}
export const C_WowEntitlementInfo = {

};
export type EntitlementDeliveredEvent = (frame: UIFrame, e: "ENTITLEMENT_DELIVERED", entitlementType: WoWEntitlementType, textureID: number, name: string, payloadID: number | undefined, showFancyToast: boolean) => void
export type RafEntitlementDeliveredEvent = (frame: UIFrame, e: "RAF_ENTITLEMENT_DELIVERED", entitlementType: WoWEntitlementType, textureID: number, name: string, payloadID: number | undefined, showFancyToast: boolean) => void