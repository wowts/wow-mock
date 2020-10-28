import { UIFrame } from "../ui";
export interface LoreTextEntry {
    text: string;
    isHeader: boolean
}
export const C_LoreText = {
    RequestLoreTextForCampaignID: (campaignID: number): void => {},
};
export type LoreTextUpdatedCampaignEvent = (frame: UIFrame, e: "LORE_TEXT_UPDATED_CAMPAIGN", campaignID: number, textEntries: any) => void