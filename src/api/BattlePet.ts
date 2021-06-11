import { UIFrame } from "../ui";

export const C_BattlePet = {};
export type PetBattleAbilityChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_ABILITY_CHANGED",
    owner: number,
    petIndex: number,
    abilityID: number
) => void;
export type PetBattleActionSelectedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_ACTION_SELECTED"
) => void;
export type PetBattleAuraAppliedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_AURA_APPLIED",
    owner: number,
    petIndex: number,
    auraInstanceID: number
) => void;
export type PetBattleAuraCanceledEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_AURA_CANCELED",
    owner: number,
    petIndex: number,
    auraInstanceID: number
) => void;
export type PetBattleAuraChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_AURA_CHANGED",
    owner: number,
    petIndex: number,
    auraInstanceID: number
) => void;
export type PetBattleCapturedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_CAPTURED",
    owner: number,
    petIndex: number
) => void;
export type PetBattleCloseEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_CLOSE"
) => void;
export type PetBattleFinalRoundEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_FINAL_ROUND",
    owner: number
) => void;
export type PetBattleHealthChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_HEALTH_CHANGED",
    owner: number,
    petIndex: number,
    healthChange: number
) => void;
export type PetBattleLevelChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_LEVEL_CHANGED",
    owner: number,
    petIndex: number,
    newLevel: number
) => void;
export type PetBattleMaxHealthChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_MAX_HEALTH_CHANGED",
    owner: number,
    petIndex: number,
    healthChange: number
) => void;
export type PetBattleOpeningDoneEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_OPENING_DONE"
) => void;
export type PetBattleOpeningStartEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_OPENING_START"
) => void;
export type PetBattleOverEvent = (frame: UIFrame, e: "PET_BATTLE_OVER") => void;
export type PetBattleOverrideAbilityEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_OVERRIDE_ABILITY",
    abilityIndex: number
) => void;
export type PetBattlePetChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PET_CHANGED",
    owner: number
) => void;
export type PetBattlePetRoundPlaybackCompleteEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PET_ROUND_PLAYBACK_COMPLETE",
    roundNumber: number
) => void;
export type PetBattlePetRoundResultsEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PET_ROUND_RESULTS",
    roundNumber: number
) => void;
export type PetBattlePetTypeChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PET_TYPE_CHANGED",
    owner: number,
    petIndex: number,
    stateValue: number
) => void;
export type PetBattlePvpDuelRequestCancelEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PVP_DUEL_REQUEST_CANCEL"
) => void;
export type PetBattlePvpDuelRequestedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_PVP_DUEL_REQUESTED",
    fullName: string
) => void;
export type PetBattleQueueProposalAcceptedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_QUEUE_PROPOSAL_ACCEPTED"
) => void;
export type PetBattleQueueProposalDeclinedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_QUEUE_PROPOSAL_DECLINED"
) => void;
export type PetBattleQueueProposeMatchEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_QUEUE_PROPOSE_MATCH"
) => void;
export type PetBattleQueueStatusEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_QUEUE_STATUS"
) => void;
export type PetBattleXpChangedEvent = (
    frame: UIFrame,
    e: "PET_BATTLE_XP_CHANGED",
    owner: number,
    petIndex: number,
    xpChange: number
) => void;
