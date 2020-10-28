import { UIFrame } from "../ui";

export const C_Social = {
    GetLastAchievement: (): [achievementID: number, achievementName: string, achievementDesc: string, iconFileID: number] => {return [0, '', '', 0]},
    GetLastItem: (): [itemID: number, itemName: string, iconFileID: number, itemQuality: number, itemLevel: number, itemLinkString: string] => {return [0, '', 0, 0, 0, '']},
    GetLastScreenshotIndex: (): number => {return 0},
    GetMaxTweetLength: (): number => {return 0},
    GetScreenshotInfoByIndex: (index: number): [screenWidth: number, screenHeight: number] => {return [0, 0]},
    GetTweetLength: (tweetText: string): number => {return 0},
    IsSocialEnabled: (): boolean => {return false},
    TwitterCheckStatus: (): void => {},
    TwitterConnect: (): void => {},
    TwitterDisconnect: (): void => {},
    TwitterGetMSTillCanPost: (): number => {return 0},
    TwitterPostMessage: (message: string): void => {},
};
export type SocialItemReceivedEvent = (frame: UIFrame, e: "SOCIAL_ITEM_RECEIVED") => void
export type TwitterLinkResultEvent = (frame: UIFrame, e: "TWITTER_LINK_RESULT", isLinked: boolean, screenName: string, error: string) => void
export type TwitterPostResultEvent = (frame: UIFrame, e: "TWITTER_POST_RESULT", result: number) => void
export type TwitterStatusUpdateEvent = (frame: UIFrame, e: "TWITTER_STATUS_UPDATE", isTwitterEnabled: boolean, isLinked: boolean, screenName: string) => void