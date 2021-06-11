import { UIFrame } from "../ui";

export const C_Browser = {};
export type SimpleBrowserWebErrorEvent = (
    frame: UIFrame,
    e: "SIMPLE_BROWSER_WEB_ERROR",
    errorCode: number
) => void;
export type SimpleBrowserWebProxyFailedEvent = (
    frame: UIFrame,
    e: "SIMPLE_BROWSER_WEB_PROXY_FAILED"
) => void;
export type SimpleCheckoutClosedEvent = (
    frame: UIFrame,
    e: "SIMPLE_CHECKOUT_CLOSED"
) => void;
