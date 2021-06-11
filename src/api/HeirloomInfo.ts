import { UIFrame } from "../ui";

export const C_HeirloomInfo = {};
export type HeirloomUpgradeTargetingChangedEvent = (
    frame: UIFrame,
    e: "HEIRLOOM_UPGRADE_TARGETING_CHANGED",
    pendingHeirloomUpgradeSpellcast: boolean
) => void;
export type HeirloomsUpdatedEvent = (
    frame: UIFrame,
    e: "HEIRLOOMS_UPDATED",
    itemID: number | undefined,
    updateReason: string | undefined,
    hideUntilLearned: boolean | undefined
) => void;
