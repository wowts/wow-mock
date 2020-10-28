import {ChatChannelType} from "./common";
import { PlayerLocationMixin } from '../mixins';
import { UIFrame } from "../ui";
export const enum CommunicationMode {
    PushToTalk = 0,
    OpenMic = 1
}
export const enum VoiceChannelErrorReason {
    Unknown = 0,
    IsBattleNetChannel = 1
}
export const enum VoiceChatStatusCode {
    Success = 0,
    OperationPending = 1,
    TooManyRequests = 2,
    LoginProhibited = 3,
    ClientNotInitialized = 4,
    ClientNotLoggedIn = 5,
    ClientAlreadyLoggedIn = 6,
    ChannelNameTooShort = 7,
    ChannelNameTooLong = 8,
    ChannelAlreadyExists = 9,
    AlreadyInChannel = 10,
    TargetNotFound = 11,
    Failure = 12,
    ServiceLost = 13,
    UnableToLaunchProxy = 14,
    ProxyConnectionTimeOut = 15,
    ProxyConnectionUnableToConnect = 16,
    ProxyConnectionUnexpectedDisconnect = 17,
    Disabled = 18,
    UnsupportedChatChannelType = 19,
    InvalidCommunityStream = 20,
    PlayerSilenced = 21,
    PlayerVoiceChatParentalDisabled = 22,
    InvalidInputDevice = 23,
    InvalidOutputDevice = 24
}
export interface VoiceAudioDevice {
    deviceID: string;
    displayName: string;
    power: number;
    isActive: boolean;
    isSystemDefault: boolean
}
export interface VoiceChatChannel {
    name: string;
    channelID: number;
    channelType: ChatChannelType;
    clubId: string;
    streamId: string;
    volume: number;
    isActive: boolean;
    isMuted: boolean;
    isTransmitting: boolean;
    isLocalProcess: boolean;
    members: any
}
export interface VoiceChatMember {
    energy: number;
    memberID: number;
    isActive: boolean;
    isSpeaking: boolean;
    isMutedForAll: boolean;
    isSilenced: boolean
}
export interface VoiceChatProcess {
    name: string;
    channels: any
}
export const C_VoiceChat = {
    ActivateChannel: (channelID: number): void => {},
    BeginLocalCapture: (listenToLocalUser: boolean): void => {},
    CanPlayerUseVoiceChat: (): boolean => {return false},
    CreateChannel: (channelDisplayName: string): VoiceChatStatusCode => {return VoiceChatStatusCode.Success},
    DeactivateChannel: (channelID: number): void => {},
    EndLocalCapture: (): void => {},
    GetActiveChannelID: (): number | undefined => {return 0},
    GetActiveChannelType: (): ChatChannelType | undefined => {return ChatChannelType.None},
    GetAvailableInputDevices: (): any | undefined => {return {} as any},
    GetAvailableOutputDevices: (): any | undefined => {return {} as any},
    GetChannel: (channelID: number): VoiceChatChannel | undefined => {return {name: '', channelID: 0, channelType: ChatChannelType.None, clubId: '', streamId: '', volume: 0, isActive: false, isMuted: false, isTransmitting: false, isLocalProcess: false, members: {} as any}},
    GetChannelForChannelType: (channelType: ChatChannelType): VoiceChatChannel | undefined => {return {name: '', channelID: 0, channelType: ChatChannelType.None, clubId: '', streamId: '', volume: 0, isActive: false, isMuted: false, isTransmitting: false, isLocalProcess: false, members: {} as any}},
    GetChannelForCommunityStream: (clubId: string, streamId: string): VoiceChatChannel | undefined => {return {name: '', channelID: 0, channelType: ChatChannelType.None, clubId: '', streamId: '', volume: 0, isActive: false, isMuted: false, isTransmitting: false, isLocalProcess: false, members: {} as any}},
    GetCommunicationMode: (): CommunicationMode | undefined => {return CommunicationMode.PushToTalk},
    GetCurrentVoiceChatConnectionStatusCode: (): VoiceChatStatusCode => {return VoiceChatStatusCode.Success},
    GetInputVolume: (): number | undefined => {return 0},
    GetJoinClubVoiceChannelError: (clubId: string): VoiceChannelErrorReason | undefined => {return VoiceChannelErrorReason.Unknown},
    GetLocalPlayerActiveChannelMemberInfo: (): VoiceChatMember | undefined => {return {energy: 0, memberID: 0, isActive: false, isSpeaking: false, isMutedForAll: false, isSilenced: false}},
    GetLocalPlayerMemberID: (channelID: number): number | undefined => {return 0},
    GetMasterVolumeScale: (): number => {return 0},
    GetMemberGUID: (memberID: number, channelID: number): string => {return ''},
    GetMemberID: (channelID: number, memberGUID: string): number | undefined => {return 0},
    GetMemberInfo: (memberID: number, channelID: number): VoiceChatMember | undefined => {return {energy: 0, memberID: 0, isActive: false, isSpeaking: false, isMutedForAll: false, isSilenced: false}},
    GetMemberName: (memberID: number, channelID: number): string | undefined => {return ''},
    GetMemberVolume: (playerLocation: PlayerLocationMixin): number | undefined => {return 0},
    GetOutputVolume: (): number | undefined => {return 0},
    GetPTTButtonPressedState: (): boolean | undefined => {return false},
    GetProcesses: (): any => {return {} as any},
    GetPushToTalkBinding: (): any | undefined => {return {} as any},
    GetVADSensitivity: (): number | undefined => {return 0},
    IsChannelJoinPending: (channelType: ChatChannelType, clubId: string | undefined, streamId: string | undefined): boolean => {return false},
    IsDeafened: (): boolean | undefined => {return false},
    IsEnabled: (): boolean => {return false},
    IsLoggedIn: (): boolean => {return false},
    IsMemberLocalPlayer: (memberID: number, channelID: number): boolean => {return false},
    IsMemberMuted: (playerLocation: PlayerLocationMixin): boolean | undefined => {return false},
    IsMemberMutedForAll: (memberID: number, channelID: number): boolean | undefined => {return false},
    IsMemberSilenced: (memberID: number, channelID: number): boolean | undefined => {return false},
    IsMuted: (): boolean | undefined => {return false},
    IsParentalDisabled: (): boolean => {return false},
    IsParentalMuted: (): boolean => {return false},
    IsPlayerUsingVoice: (playerLocation: PlayerLocationMixin): boolean => {return false},
    IsSilenced: (): boolean | undefined => {return false},
    LeaveChannel: (channelID: number): void => {},
    Login: (): VoiceChatStatusCode => {return VoiceChatStatusCode.Success},
    Logout: (): VoiceChatStatusCode => {return VoiceChatStatusCode.Success},
    MarkChannelsDiscovered: (): void => {},
    RequestJoinAndActivateCommunityStreamChannel: (clubId: string, streamId: string): void => {},
    RequestJoinChannelByChannelType: (channelType: ChatChannelType, autoActivate: boolean | undefined): void => {},
    SetCommunicationMode: (communicationMode: CommunicationMode): void => {},
    SetDeafened: (isDeafened: boolean): void => {},
    SetInputDevice: (deviceID: string): void => {},
    SetInputVolume: (volume: number): void => {},
    SetMasterVolumeScale: (scale: number): void => {},
    SetMemberMuted: (playerLocation: PlayerLocationMixin, muted: boolean): void => {},
    SetMemberVolume: (playerLocation: PlayerLocationMixin, volume: number): void => {},
    SetMuted: (isMuted: boolean): void => {},
    SetOutputDevice: (deviceID: string): void => {},
    SetOutputVolume: (volume: number): void => {},
    SetPortraitTexture: (textureObject: any, memberID: number, channelID: number): void => {},
    SetPushToTalkBinding: (keys: any): void => {},
    SetVADSensitivity: (sensitivity: number): void => {},
    ShouldDiscoverChannels: (): boolean => {return false},
    ToggleDeafened: (): void => {},
    ToggleMemberMuted: (playerLocation: PlayerLocationMixin): void => {},
    ToggleMuted: (): void => {},
};
export type VoiceChatActiveInputDeviceUpdatedEvent = (frame: UIFrame, e: "VOICE_CHAT_ACTIVE_INPUT_DEVICE_UPDATED") => void
export type VoiceChatActiveOutputDeviceUpdatedEvent = (frame: UIFrame, e: "VOICE_CHAT_ACTIVE_OUTPUT_DEVICE_UPDATED") => void
export type VoiceChatAudioCaptureEnergyEvent = (frame: UIFrame, e: "VOICE_CHAT_AUDIO_CAPTURE_ENERGY", isSpeaking: boolean, energy: number) => void
export type VoiceChatAudioCaptureStartedEvent = (frame: UIFrame, e: "VOICE_CHAT_AUDIO_CAPTURE_STARTED") => void
export type VoiceChatAudioCaptureStoppedEvent = (frame: UIFrame, e: "VOICE_CHAT_AUDIO_CAPTURE_STOPPED") => void
export type VoiceChatChannelActivatedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_ACTIVATED", channelID: number) => void
export type VoiceChatChannelDeactivatedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_DEACTIVATED", channelID: number) => void
export type VoiceChatChannelDisplayNameChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_DISPLAY_NAME_CHANGED", channelID: number, channelDisplayName: string) => void
export type VoiceChatChannelJoinedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_JOINED", status: VoiceChatStatusCode, channelID: number, channelType: ChatChannelType, clubId: string | undefined, streamId: string | undefined) => void
export type VoiceChatChannelMemberActiveStateChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_ACTIVE_STATE_CHANGED", memberID: number, channelID: number, isActive: boolean) => void
export type VoiceChatChannelMemberAddedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_ADDED", memberID: number, channelID: number) => void
export type VoiceChatChannelMemberEnergyChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_ENERGY_CHANGED", memberID: number, channelID: number, speakingEnergy: number) => void
export type VoiceChatChannelMemberGuidUpdatedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_GUID_UPDATED", memberID: number, channelID: number) => void
export type VoiceChatChannelMemberMuteForAllChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_MUTE_FOR_ALL_CHANGED", memberID: number, channelID: number, isMutedForAll: boolean) => void
export type VoiceChatChannelMemberMuteForMeChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_MUTE_FOR_ME_CHANGED", memberID: number, channelID: number, isMutedForMe: boolean) => void
export type VoiceChatChannelMemberRemovedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_REMOVED", memberID: number, channelID: number) => void
export type VoiceChatChannelMemberSilencedChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_SILENCED_CHANGED", memberID: number, channelID: number, isSilenced: boolean) => void
export type VoiceChatChannelMemberSpeakingStateChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_SPEAKING_STATE_CHANGED", memberID: number, channelID: number, isSpeaking: boolean) => void
export type VoiceChatChannelMemberVolumeChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MEMBER_VOLUME_CHANGED", memberID: number, channelID: number, volume: number) => void
export type VoiceChatChannelMuteStateChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_MUTE_STATE_CHANGED", channelID: number, isMuted: boolean) => void
export type VoiceChatChannelPttChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_PTT_CHANGED", channelID: number, pushToTalkSetting: string) => void
export type VoiceChatChannelRemovedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_REMOVED", channelID: number) => void
export type VoiceChatChannelTransmitChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_TRANSMIT_CHANGED", channelID: number, isTransmitting: boolean) => void
export type VoiceChatChannelVolumeChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_CHANNEL_VOLUME_CHANGED", channelID: number, volume: number) => void
export type VoiceChatCommunicationModeChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_COMMUNICATION_MODE_CHANGED", communicationMode: CommunicationMode) => void
export type VoiceChatConnectionSuccessEvent = (frame: UIFrame, e: "VOICE_CHAT_CONNECTION_SUCCESS") => void
export type VoiceChatDeafenedChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_DEAFENED_CHANGED", isDeafened: boolean) => void
export type VoiceChatErrorEvent = (frame: UIFrame, e: "VOICE_CHAT_ERROR", platformCode: number, statusCode: VoiceChatStatusCode) => void
export type VoiceChatInputDevicesUpdatedEvent = (frame: UIFrame, e: "VOICE_CHAT_INPUT_DEVICES_UPDATED") => void
export type VoiceChatLoginEvent = (frame: UIFrame, e: "VOICE_CHAT_LOGIN", status: VoiceChatStatusCode) => void
export type VoiceChatLogoutEvent = (frame: UIFrame, e: "VOICE_CHAT_LOGOUT", status: VoiceChatStatusCode) => void
export type VoiceChatMutedChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_MUTED_CHANGED", isMuted: boolean) => void
export type VoiceChatOutputDevicesUpdatedEvent = (frame: UIFrame, e: "VOICE_CHAT_OUTPUT_DEVICES_UPDATED") => void
export type VoiceChatPendingChannelJoinStateEvent = (frame: UIFrame, e: "VOICE_CHAT_PENDING_CHANNEL_JOIN_STATE", channelType: ChatChannelType, clubId: string | undefined, streamId: string | undefined, pendingJoin: boolean) => void
export type VoiceChatPttButtonPressedStateChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_PTT_BUTTON_PRESSED_STATE_CHANGED", isPressed: boolean) => void
export type VoiceChatSilencedChangedEvent = (frame: UIFrame, e: "VOICE_CHAT_SILENCED_CHANGED", isSilenced: boolean) => void