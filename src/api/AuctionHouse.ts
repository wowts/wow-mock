import {
    AuctionHouseFilter,
    AuctionHouseSortOrder,
    AuctionHouseTimeLeftBand,
} from "./common";
import { ItemLocationMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum AuctionHouseFilterCategory {
    Uncategorized = 0,
    Equipment = 1,
    Rarity = 2,
}
export const enum AuctionStatus {
    Active = 0,
    Sold = 1,
}
export const enum ItemCommodityStatus {
    Unknown = 0,
    Item = 1,
    Commodity = 2,
}
export interface AuctionHouseBrowseQuery {
    searchString: string;
    sorts: LuaArray<AuctionHouseSortType>;
    minLevel: number | undefined;
    maxLevel: number | undefined;
    filters: LuaArray<AuctionHouseFilter> | undefined;
    itemClassFilters: LuaArray<AuctionHouseItemClassFilter> | undefined;
}
export interface AuctionHouseFilterGroup {
    category: AuctionHouseFilterCategory;
    filters: LuaArray<AuctionHouseFilter>;
}
export interface AuctionHouseItemClassFilter {
    classID: number;
    subClassID: number | undefined;
    inventoryType: number | undefined;
}
export interface AuctionHouseSortType {
    sortOrder: AuctionHouseSortOrder;
    reverseSort: boolean;
}
export interface BidInfo {
    auctionID: number;
    itemKey: ItemKey;
    itemLink: string | undefined;
    timeLeft: AuctionHouseTimeLeftBand;
    minBid: number | undefined;
    bidAmount: number | undefined;
    buyoutAmount: number | undefined;
    bidder: string | undefined;
}
export interface BrowseResultInfo {
    itemKey: ItemKey;
    appearanceLink: string | undefined;
    totalQuantity: number;
    minPrice: number;
    containsOwnerItem: boolean;
}
export interface CommoditySearchResultInfo {
    itemID: number;
    quantity: number;
    unitPrice: number;
    auctionID: number;
    owners: LuaArray<string>;
    totalNumberOfOwners: number;
    timeLeftSeconds: number | undefined;
    numOwnerItems: number;
    containsOwnerItem: boolean;
    containsAccountItem: boolean;
}
export interface ItemKey {
    itemID: number;
    itemLevel: number;
    itemSuffix: number;
    battlePetSpeciesID: number;
}
export interface ItemKeyInfo {
    itemName: string;
    battlePetLink: string | undefined;
    appearanceLink: string | undefined;
    quality: number;
    iconFileID: number;
    isPet: boolean;
    isCommodity: boolean;
    isEquipment: boolean;
}
export interface ItemSearchResultInfo {
    itemKey: ItemKey;
    owners: LuaArray<string>;
    totalNumberOfOwners: number;
    timeLeft: AuctionHouseTimeLeftBand;
    auctionID: number;
    quantity: number;
    itemLink: string | undefined;
    containsOwnerItem: boolean;
    containsAccountItem: boolean;
    containsSocketedItem: boolean;
    bidder: string | undefined;
    minBid: number | undefined;
    bidAmount: number | undefined;
    buyoutAmount: number | undefined;
    timeLeftSeconds: number | undefined;
}
export interface OwnedAuctionInfo {
    auctionID: number;
    itemKey: ItemKey;
    itemLink: string | undefined;
    status: AuctionStatus;
    quantity: number;
    timeLeftSeconds: number | undefined;
    timeLeft: AuctionHouseTimeLeftBand | undefined;
    bidAmount: number | undefined;
    buyoutAmount: number | undefined;
    bidder: string | undefined;
}
export const C_AuctionHouse = {
    CalculateCommodityDeposit: (
        itemID: number,
        duration: number,
        quantity: number
    ): number | undefined => {
        return 0;
    },
    CalculateItemDeposit: (
        item: ItemLocationMixin,
        duration: number,
        quantity: number
    ): number | undefined => {
        return 0;
    },
    CanCancelAuction: (ownedAuctionID: number): boolean => {
        return false;
    },
    CancelAuction: (ownedAuctionID: number): void => {},
    CancelCommoditiesPurchase: (): void => {},
    CancelSell: (): void => {},
    CloseAuctionHouse: (): void => {},
    ConfirmCommoditiesPurchase: (itemID: number, quantity: number): void => {},
    FavoritesAreAvailable: (): boolean => {
        return false;
    },
    GetAuctionItemSubClasses: (classID: number): LuaArray<number> => {
        return {} as any;
    },
    GetAvailablePostCount: (item: ItemLocationMixin): number => {
        return 0;
    },
    GetBidInfo: (bidIndex: number): BidInfo | undefined => {
        return {
            auctionID: 0,
            itemKey: {
                itemID: 0,
                itemLevel: 0,
                itemSuffix: 0,
                battlePetSpeciesID: 0,
            },
            itemLink: "",
            timeLeft: AuctionHouseTimeLeftBand.Short,
            minBid: 0,
            bidAmount: 0,
            buyoutAmount: 0,
            bidder: "",
        };
    },
    GetBidType: (bidTypeIndex: number): ItemKey | undefined => {
        return {
            itemID: 0,
            itemLevel: 0,
            itemSuffix: 0,
            battlePetSpeciesID: 0,
        };
    },
    GetBrowseResults: (): LuaArray<BrowseResultInfo> => {
        return {} as any;
    },
    GetCancelCost: (ownedAuctionID: number): number => {
        return 0;
    },
    GetCommoditySearchResultInfo: (
        itemID: number,
        commoditySearchResultIndex: number
    ): CommoditySearchResultInfo | undefined => {
        return {
            itemID: 0,
            quantity: 0,
            unitPrice: 0,
            auctionID: 0,
            owners: {} as any,
            totalNumberOfOwners: 0,
            timeLeftSeconds: 0,
            numOwnerItems: 0,
            containsOwnerItem: false,
            containsAccountItem: false,
        };
    },
    GetCommoditySearchResultsQuantity: (itemID: number): number => {
        return 0;
    },
    GetExtraBrowseInfo: (itemKey: ItemKey): number => {
        return 0;
    },
    GetFilterGroups: (): LuaArray<AuctionHouseFilterGroup> => {
        return {} as any;
    },
    GetItemCommodityStatus: (item: ItemLocationMixin): ItemCommodityStatus => {
        return ItemCommodityStatus.Unknown;
    },
    GetItemKeyFromItem: (item: ItemLocationMixin): ItemKey => {
        return {
            itemID: 0,
            itemLevel: 0,
            itemSuffix: 0,
            battlePetSpeciesID: 0,
        };
    },
    GetItemKeyInfo: (
        itemKey: ItemKey,
        restrictQualityToFilter: boolean
    ): ItemKeyInfo | undefined => {
        return {
            itemName: "",
            battlePetLink: "",
            appearanceLink: "",
            quality: 0,
            iconFileID: 0,
            isPet: false,
            isCommodity: false,
            isEquipment: false,
        };
    },
    GetItemKeyRequiredLevel: (itemKey: ItemKey): number => {
        return 0;
    },
    GetItemSearchResultInfo: (
        itemKey: ItemKey,
        itemSearchResultIndex: number
    ): ItemSearchResultInfo | undefined => {
        return {
            itemKey: {
                itemID: 0,
                itemLevel: 0,
                itemSuffix: 0,
                battlePetSpeciesID: 0,
            },
            owners: {} as any,
            totalNumberOfOwners: 0,
            timeLeft: AuctionHouseTimeLeftBand.Short,
            auctionID: 0,
            quantity: 0,
            itemLink: "",
            containsOwnerItem: false,
            containsAccountItem: false,
            containsSocketedItem: false,
            bidder: "",
            minBid: 0,
            bidAmount: 0,
            buyoutAmount: 0,
            timeLeftSeconds: 0,
        };
    },
    GetItemSearchResultsQuantity: (itemKey: ItemKey): number => {
        return 0;
    },
    GetMaxBidItemBid: (): number | undefined => {
        return 0;
    },
    GetMaxBidItemBuyout: (): number | undefined => {
        return 0;
    },
    GetMaxCommoditySearchResultPrice: (itemID: number): number | undefined => {
        return 0;
    },
    GetMaxItemSearchResultBid: (itemKey: ItemKey): number | undefined => {
        return 0;
    },
    GetMaxItemSearchResultBuyout: (itemKey: ItemKey): number | undefined => {
        return 0;
    },
    GetMaxOwnedAuctionBid: (): number | undefined => {
        return 0;
    },
    GetMaxOwnedAuctionBuyout: (): number | undefined => {
        return 0;
    },
    GetNumBidTypes: (): number => {
        return 0;
    },
    GetNumBids: (): number => {
        return 0;
    },
    GetNumCommoditySearchResults: (itemID: number): number => {
        return 0;
    },
    GetNumItemSearchResults: (itemKey: ItemKey): number => {
        return 0;
    },
    GetNumOwnedAuctionTypes: (): number => {
        return 0;
    },
    GetNumOwnedAuctions: (): number => {
        return 0;
    },
    GetNumReplicateItems: (): number => {
        return 0;
    },
    GetOwnedAuctionInfo: (
        ownedAuctionIndex: number
    ): OwnedAuctionInfo | undefined => {
        return {
            auctionID: 0,
            itemKey: {
                itemID: 0,
                itemLevel: 0,
                itemSuffix: 0,
                battlePetSpeciesID: 0,
            },
            itemLink: "",
            status: AuctionStatus.Active,
            quantity: 0,
            timeLeftSeconds: 0,
            timeLeft: AuctionHouseTimeLeftBand.Short,
            bidAmount: 0,
            buyoutAmount: 0,
            bidder: "",
        };
    },
    GetOwnedAuctionType: (
        ownedAuctionTypeIndex: number
    ): ItemKey | undefined => {
        return {
            itemID: 0,
            itemLevel: 0,
            itemSuffix: 0,
            battlePetSpeciesID: 0,
        };
    },
    GetQuoteDurationRemaining: (): number => {
        return 0;
    },
    GetReplicateItemBattlePetInfo: (
        index: number
    ): [creatureID: number, displayID: number] => {
        return [0, 0];
    },
    GetReplicateItemInfo: (
        index: number
    ): [
        name: string | undefined,
        texture: number | undefined,
        count: number,
        qualityID: number,
        usable: boolean | undefined,
        level: number,
        levelType: string | undefined,
        minBid: number,
        minIncrement: number,
        buyoutPrice: number,
        bidAmount: number,
        highBidder: string | undefined,
        bidderFullName: string | undefined,
        owner: string | undefined,
        ownerFullName: string | undefined,
        saleStatus: number,
        itemID: number,
        hasAllInfo: boolean | undefined
    ] => {
        return [
            "",
            0,
            0,
            0,
            false,
            0,
            "",
            0,
            0,
            0,
            0,
            "",
            "",
            "",
            "",
            0,
            0,
            false,
        ];
    },
    GetReplicateItemLink: (index: number): string | undefined => {
        return "";
    },
    GetReplicateItemTimeLeft: (index: number): number => {
        return 0;
    },
    GetTimeLeftBandInfo: (
        timeLeftBand: AuctionHouseTimeLeftBand
    ): [timeLeftMinSeconds: number, timeLeftMaxSeconds: number] => {
        return [0, 0];
    },
    HasFavorites: (): boolean => {
        return false;
    },
    HasFullBidResults: (): boolean => {
        return false;
    },
    HasFullBrowseResults: (): boolean => {
        return false;
    },
    HasFullCommoditySearchResults: (itemID: number): boolean => {
        return false;
    },
    HasFullItemSearchResults: (itemKey: ItemKey): boolean => {
        return false;
    },
    HasFullOwnedAuctionResults: (): boolean => {
        return false;
    },
    HasMaxFavorites: (): boolean => {
        return false;
    },
    HasSearchResults: (itemKey: ItemKey): boolean => {
        return false;
    },
    IsFavoriteItem: (itemKey: ItemKey): boolean => {
        return false;
    },
    IsSellItemValid: (
        item: ItemLocationMixin,
        displayError: boolean
    ): boolean => {
        return false;
    },
    IsThrottledMessageSystemReady: (): boolean => {
        return false;
    },
    MakeItemKey: (
        itemID: number,
        itemLevel: number,
        itemSuffix: number,
        battlePetSpeciesID: number
    ): ItemKey => {
        return {
            itemID: 0,
            itemLevel: 0,
            itemSuffix: 0,
            battlePetSpeciesID: 0,
        };
    },
    PlaceBid: (auctionID: number, bidAmount: number): void => {},
    PostCommodity: (
        item: ItemLocationMixin,
        duration: number,
        quantity: number,
        unitPrice: number
    ): void => {},
    PostItem: (
        item: ItemLocationMixin,
        duration: number,
        quantity: number,
        bid: number | undefined,
        buyout: number | undefined
    ): void => {},
    QueryBids: (
        sorts: LuaArray<AuctionHouseSortType>,
        auctionIDs: LuaArray<number>
    ): void => {},
    QueryOwnedAuctions: (sorts: LuaArray<AuctionHouseSortType>): void => {},
    RefreshCommoditySearchResults: (itemID: number): void => {},
    RefreshItemSearchResults: (
        itemKey: ItemKey,
        minLevelFilter: number | undefined,
        maxLevelFilter: number | undefined
    ): void => {},
    ReplicateItems: (): void => {},
    RequestMoreBrowseResults: (): void => {},
    RequestMoreCommoditySearchResults: (itemID: number): boolean => {
        return false;
    },
    RequestMoreItemSearchResults: (itemKey: ItemKey): boolean => {
        return false;
    },
    RequestOwnedAuctionBidderInfo: (auctionID: number): string | undefined => {
        return "";
    },
    SearchForFavorites: (sorts: LuaArray<AuctionHouseSortType>): void => {},
    SearchForItemKeys: (
        itemKeys: LuaArray<ItemKey>,
        sorts: LuaArray<AuctionHouseSortType>
    ): void => {},
    SendBrowseQuery: (query: AuctionHouseBrowseQuery): void => {},
    SendSearchQuery: (
        itemKey: ItemKey,
        sorts: LuaArray<AuctionHouseSortType>,
        separateOwnerItems: boolean,
        minLevelFilter: number,
        maxLevelFilter: number
    ): void => {},
    SendSellSearchQuery: (
        itemKey: ItemKey,
        sorts: LuaArray<AuctionHouseSortType>,
        separateOwnerItems: boolean
    ): void => {},
    SetFavoriteItem: (itemKey: ItemKey, setFavorite: boolean): void => {},
    StartCommoditiesPurchase: (itemID: number, quantity: number): void => {},
};
export type AuctionCanceledEvent = (
    frame: UIFrame,
    e: "AUCTION_CANCELED",
    auctionID: number
) => void;
export type AuctionHouseAuctionCreatedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_AUCTION_CREATED",
    auctionID: number
) => void;
export type AuctionHouseBrowseFailureEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_BROWSE_FAILURE"
) => void;
export type AuctionHouseBrowseResultsAddedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_BROWSE_RESULTS_ADDED",
    addedBrowseResults: LuaArray<BrowseResultInfo>
) => void;
export type AuctionHouseBrowseResultsUpdatedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_BROWSE_RESULTS_UPDATED"
) => void;
export type AuctionHouseClosedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_CLOSED"
) => void;
export type AuctionHouseDisabledEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_DISABLED"
) => void;
export type AuctionHouseFavoritesUpdatedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_FAVORITES_UPDATED"
) => void;
export type AuctionHouseNewBidReceivedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_NEW_BID_RECEIVED",
    auctionID: number
) => void;
export type AuctionHouseNewResultsReceivedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_NEW_RESULTS_RECEIVED",
    itemKey: ItemKey | undefined
) => void;
export type AuctionHouseScriptDeprecatedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_SCRIPT_DEPRECATED"
) => void;
export type AuctionHouseShowEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_SHOW"
) => void;
export type AuctionHouseThrottledMessageDroppedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_THROTTLED_MESSAGE_DROPPED"
) => void;
export type AuctionHouseThrottledMessageQueuedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_THROTTLED_MESSAGE_QUEUED"
) => void;
export type AuctionHouseThrottledMessageResponseReceivedEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_THROTTLED_MESSAGE_RESPONSE_RECEIVED"
) => void;
export type AuctionHouseThrottledMessageSentEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_THROTTLED_MESSAGE_SENT"
) => void;
export type AuctionHouseThrottledSystemReadyEvent = (
    frame: UIFrame,
    e: "AUCTION_HOUSE_THROTTLED_SYSTEM_READY"
) => void;
export type AuctionMultisellFailureEvent = (
    frame: UIFrame,
    e: "AUCTION_MULTISELL_FAILURE"
) => void;
export type AuctionMultisellStartEvent = (
    frame: UIFrame,
    e: "AUCTION_MULTISELL_START",
    numRepetitions: number
) => void;
export type AuctionMultisellUpdateEvent = (
    frame: UIFrame,
    e: "AUCTION_MULTISELL_UPDATE",
    createdCount: number,
    totalToCreate: number
) => void;
export type BidAddedEvent = (
    frame: UIFrame,
    e: "BID_ADDED",
    bidID: number
) => void;
export type BidsUpdatedEvent = (frame: UIFrame, e: "BIDS_UPDATED") => void;
export type CommodityPriceUnavailableEvent = (
    frame: UIFrame,
    e: "COMMODITY_PRICE_UNAVAILABLE"
) => void;
export type CommodityPriceUpdatedEvent = (
    frame: UIFrame,
    e: "COMMODITY_PRICE_UPDATED",
    updatedUnitPrice: number,
    updatedTotalPrice: number
) => void;
export type CommodityPurchaseFailedEvent = (
    frame: UIFrame,
    e: "COMMODITY_PURCHASE_FAILED"
) => void;
export type CommodityPurchaseSucceededEvent = (
    frame: UIFrame,
    e: "COMMODITY_PURCHASE_SUCCEEDED"
) => void;
export type CommodityPurchasedEvent = (
    frame: UIFrame,
    e: "COMMODITY_PURCHASED",
    itemID: number,
    quantity: number
) => void;
export type CommoditySearchResultsAddedEvent = (
    frame: UIFrame,
    e: "COMMODITY_SEARCH_RESULTS_ADDED",
    itemID: number
) => void;
export type CommoditySearchResultsUpdatedEvent = (
    frame: UIFrame,
    e: "COMMODITY_SEARCH_RESULTS_UPDATED",
    itemID: number
) => void;
export type ExtraBrowseInfoReceivedEvent = (
    frame: UIFrame,
    e: "EXTRA_BROWSE_INFO_RECEIVED",
    itemID: number
) => void;
export type ItemKeyItemInfoReceivedEvent = (
    frame: UIFrame,
    e: "ITEM_KEY_ITEM_INFO_RECEIVED",
    itemID: number
) => void;
export type ItemPurchasedEvent = (
    frame: UIFrame,
    e: "ITEM_PURCHASED",
    itemID: number
) => void;
export type ItemSearchResultsAddedEvent = (
    frame: UIFrame,
    e: "ITEM_SEARCH_RESULTS_ADDED",
    itemKey: ItemKey
) => void;
export type ItemSearchResultsUpdatedEvent = (
    frame: UIFrame,
    e: "ITEM_SEARCH_RESULTS_UPDATED",
    itemKey: ItemKey,
    newAuctionID: number | undefined
) => void;
export type OwnedAuctionBidderInfoReceivedEvent = (
    frame: UIFrame,
    e: "OWNED_AUCTION_BIDDER_INFO_RECEIVED",
    auctionID: number,
    bidderName: string
) => void;
export type OwnedAuctionsUpdatedEvent = (
    frame: UIFrame,
    e: "OWNED_AUCTIONS_UPDATED"
) => void;
export type ReplicateItemListUpdateEvent = (
    frame: UIFrame,
    e: "REPLICATE_ITEM_LIST_UPDATE"
) => void;
