import { UIFrame } from "../ui";

export const C_ItemSocketInfo = {
    CompleteSocketing: (): void => {},
};
export type SocketInfoAcceptEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_ACCEPT"
) => void;
export type SocketInfoBindConfirmEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_BIND_CONFIRM"
) => void;
export type SocketInfoCloseEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_CLOSE"
) => void;
export type SocketInfoFailureEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_FAILURE"
) => void;
export type SocketInfoRefundableConfirmEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_REFUNDABLE_CONFIRM"
) => void;
export type SocketInfoSuccessEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_SUCCESS"
) => void;
export type SocketInfoUpdateEvent = (
    frame: UIFrame,
    e: "SOCKET_INFO_UPDATE"
) => void;
