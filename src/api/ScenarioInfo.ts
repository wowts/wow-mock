import { UIFrame } from "../ui";
export const enum JailersTowerType {
    TwistingCorridors = 0,
    SkoldusHalls = 1,
    FractureChambers = 2,
    Soulforges = 3,
    Coldheart = 4,
    Mortregar = 5,
    UpperReaches = 6,
    ArkobanHall = 7,
    TormentChamberJaina = 8,
    TormentChamberThrall = 9,
    TormentChamberAnduin = 10,
}
export const C_ScenarioInfo = {};
export type JailersTowerLevelUpdateEvent = (
    frame: UIFrame,
    e: "JAILERS_TOWER_LEVEL_UPDATE",
    level: number,
    type: JailersTowerType
) => void;
export type ScenarioBonusObjectiveCompleteEvent = (
    frame: UIFrame,
    e: "SCENARIO_BONUS_OBJECTIVE_COMPLETE",
    bonusObjectiveID: number
) => void;
export type ScenarioBonusVisibilityUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_BONUS_VISIBILITY_UPDATE"
) => void;
export type ScenarioCompletedEvent = (
    frame: UIFrame,
    e: "SCENARIO_COMPLETED",
    questID: number | undefined,
    xp: number | undefined,
    money: number | undefined
) => void;
export type ScenarioCriteriaShowStateUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_CRITERIA_SHOW_STATE_UPDATE",
    show: boolean
) => void;
export type ScenarioCriteriaUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_CRITERIA_UPDATE",
    criteriaID: number
) => void;
export type ScenarioPoiUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_POI_UPDATE"
) => void;
export type ScenarioSpellUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_SPELL_UPDATE"
) => void;
export type ScenarioUpdateEvent = (
    frame: UIFrame,
    e: "SCENARIO_UPDATE",
    newStep: boolean | undefined
) => void;
