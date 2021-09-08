import { ChatChannelType } from "./common";
import { PlayerLocationMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum CommunicationMode {
    PushToTalk = 0,
    OpenMic = 1,
}
export const enum VoiceChannelErrorReason {
    Unknown = 0,
    IsBattleNetChannel = 1,
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
    InvalidOutputDevice = 24,
}
export const enum VoiceTtsDestination {
    RemoteTransmission = 0,
    LocalPlayback = 1,
    RemoteTransmissionWithLocalPlayback = 2,
    QueuedRemoteTransmission = 3,
    QueuedLocalPlayback = 4,
    QueuedRemoteTransmissionWithLocalPlayback = 5,
    ScreenReader = 6,
}
export const enum VoiceTtsStatusCode {
    Success = 0,
    InvalidEngineType = 1,
    EngineAllocationFailed = 2,
    NotSupported = 3,
    MaxCharactersExceeded = 4,
    UtteranceBelowMinimumDuration = 5,
    InputTextEnqueued = 6,
    SdkNotInitialized = 7,
    DestinationQueueFull = 8,
    EnqueueNotNecessary = 9,
    UtteranceNotFound = 10,
    ManagerNotFound = 11,
    InvalidArgument = 12,
    InternalError = 13,
}
export interface VoiceAudioDevice {
    deviceID: string;
    displayName: string;
    isActive: boolean;
    isSystemDefault: boolean;
    isCommsDefault: boolean;
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
    isTranscribing: boolean;
    members: LuaArray<VoiceChatMember>;
}
export interface VoiceChatMember {
    energy: number;
    memberID: number;
    isActive: boolean;
    isSpeaking: boolean;
    isMutedForAll: boolean;
    isSilenced: boolean;
}
export interface VoiceChatProcess {
    name: string;
    channels: LuaArray<VoiceChatChannel>;
}
export interface VoiceTtsVoiceType {
    voiceID: number;
    name: string;
}
export const C_VoiceChat = {
    ActivateChannel: (channelID: number): void => {},
    ActivateChannelTranscription: (channelID: number): void => {},
    BeginLocalCapture: (listenToLocalUser: boolean): void => {},
    CanPlayerUseVoiceChat: (): boolean => {
        return false;
    },
    CreateChannel: (channelDisplayName: string): VoiceChatStatusCode => {
        return VoiceChatStatusCode.Success;
    },
    DeactivateChannel: (channelID: number): void => {},
    DeactivateChannelTranscription: (channelID: number): void => {},
    EndLocalCapture: (): void => {},
    GetActiveChannelID: (): number | undefined => {
        return 0;
    },
    GetActiveChannelType: (): ChatChannelType | undefined => {
        return ChatChannelType.None;
    },
    GetAvailableInputDevices: (): LuaArray<VoiceAudioDevice> | undefined => {
        return {} as any;
    },
    GetAvailableOutputDevices: (): LuaArray<VoiceAudioDevice> | undefined => {
        return {} as any;
    },
    GetChannel: (channelID: number): VoiceChatChannel | undefined => {
        return {
            name: "",
            channelID: 0,
            channelType: ChatChannelType.None,
            clubId: "",
            streamId: "",
            volume: 0,
            isActive: false,
            isMuted: false,
            isTransmitting: false,
            isTranscribing: false,
            members: {} as any,
        };
    },
    GetChannelForChannelType: (
        channelType: ChatChannelType
    ): VoiceChatChannel | undefined => {
        return {
            name: "",
            channelID: 0,
            channelType: ChatChannelType.None,
            clubId: "",
            streamId: "",
            volume: 0,
            isActive: false,
            isMuted: false,
            isTransmitting: false,
            isTranscribing: false,
            members: {} as any,
        };
    },
    GetChannelForCommunityStream: (
        clubId: string,
        streamId: string
    ): VoiceChatChannel | undefined => {
        return {
            name: "",
            channelID: 0,
            channelType: ChatChannelType.None,
            clubId: "",
            streamId: "",
            volume: 0,
            isActive: false,
            isMuted: false,
            isTransmitting: false,
            isTranscribing: false,
            members: {} as any,
        };
    },
    GetCommunicationMode: (): CommunicationMode | undefined => {
        return CommunicationMode.PushToTalk;
    },
    GetCurrentVoiceChatConnectionStatusCode: (): VoiceChatStatusCode => {
        return VoiceChatStatusCode.Success;
    },
    GetInputVolume: (): number | undefined => {
        return 0;
    },
    GetJoinClubVoiceChannelError: (
        clubId: string
    ): VoiceChannelErrorReason | undefined => {
        return VoiceChannelErrorReason.Unknown;
    },
    GetLocalPlayerActiveChannelMemberInfo: (): VoiceChatMember | undefined => {
        return {
            energy: 0,
            memberID: 0,
            isActive: false,
            isSpeaking: false,
            isMutedForAll: false,
            isSilenced: false,
        };
    },
    GetLocalPlayerMemberID: (channelID: number): number | undefined => {
        return 0;
    },
    GetMasterVolumeScale: (): number => {
        return 0;
    },
    GetMemberGUID: (memberID: number, channelID: number): string => {
        return "";
    },
    GetMemberID: (
        channelID: number,
        memberGUID: string
    ): number | undefined => {
        return 0;
    },
    GetMemberInfo: (
        memberID: number,
        channelID: number
    ): VoiceChatMember | undefined => {
        return {
            energy: 0,
            memberID: 0,
            isActive: false,
            isSpeaking: false,
            isMutedForAll: false,
            isSilenced: false,
        };
    },
    GetMemberName: (
        memberID: number,
        channelID: number
    ): string | undefined => {
        return "";
    },
    GetMemberVolume: (
        playerLocation: PlayerLocationMixin
    ): number | undefined => {
        return 0;
    },
    GetOutputVolume: (): number | undefined => {
        return 0;
    },
    GetPTTButtonPressedState: (): boolean | undefined => {
        return false;
    },
    GetProcesses: (): LuaArray<VoiceChatProcess> => {
        return {} as any;
    },
    GetPushToTalkBinding: (): LuaArray<string> | undefined => {
        return {} as any;
    },
    GetRemoteTtsVoices: (): LuaArray<VoiceTtsVoiceType> => {
        return {} as any;
    },
    GetTtsVoices: (): LuaArray<VoiceTtsVoiceType> => {
        return {} as any;
    },
    GetVADSensitivity: (): number | undefined => {
        return 0;
    },
    IsChannelJoinPending: (
        channelType: ChatChannelType,
        clubId: string | undefined,
        streamId: string | undefined
    ): boolean => {
        return false;
    },
    IsDeafened: (): boolean | undefined => {
        return false;
    },
    IsEnabled: (): boolean => {
        return false;
    },
    IsLoggedIn: (): boolean => {
        return false;
    },
    IsMemberLocalPlayer: (memberID: number, channelID: number): boolean => {
        return false;
    },
    IsMemberMuted: (
        playerLocation: PlayerLocationMixin
    ): boolean | undefined => {
        return false;
    },
    IsMemberMutedForAll: (
        memberID: number,
        channelID: number
    ): boolean | undefined => {
        return false;
    },
    IsMemberSilenced: (
        memberID: number,
        channelID: number
    ): boolean | undefined => {
        return false;
    },
    IsMuted: (): boolean | undefined => {
        return false;
    },
    IsParentalDisabled: (): boolean => {
        return false;
    },
    IsParentalMuted: (): boolean => {
        return false;
    },
    IsPlayerUsingVoice: (playerLocation: PlayerLocationMixin): boolean => {
        return false;
    },
    IsSilenced: (): boolean | undefined => {
        return false;
    },
    IsSpeakForMeActive: (): boolean => {
        return false;
    },
    IsSpeakForMeAllowed: (): boolean => {
        return false;
    },
    IsTranscriptionAllowed: (): boolean => {
        return false;
    },
    LeaveChannel: (channelID: number): void => {},
    Login: (): VoiceChatStatusCode => {
        return VoiceChatStatusCode.Success;
    },
    Logout: (): VoiceChatStatusCode => {
        return VoiceChatStatusCode.Success;
    },
    MarkChannelsDiscovered: (): void => {},
    RequestJoinAndActivateCommunityStreamChannel: (
        clubId: string,
        streamId: string
    ): void => {},
    RequestJoinChannelByChannelType: (
        channelType: ChatChannelType,
        autoActivate: boolean | undefined
    ): void => {},
    SetCommunicationMode: (communicationMode: CommunicationMode): void => {},
    SetDeafened: (isDeafened: boolean): void => {},
    SetInputDevice: (deviceID: string): void => {},
    SetInputVolume: (volume: number): void => {},
    SetMasterVolumeScale: (scale: number): void => {},
    SetMemberMuted: (
        playerLocation: PlayerLocationMixin,
        muted: boolean
    ): void => {},
    SetMemberVolume: (
        playerLocation: PlayerLocationMixin,
        volume: number
    ): void => {},
    SetMuted: (isMuted: boolean): void => {},
    SetOutputDevice: (deviceID: string): void => {},
    SetOutputVolume: (volume: number): void => {},
    SetPortraitTexture: (
        textureObject: any,
        memberID: number,
        channelID: number
    ): void => {},
    SetPushToTalkBinding: (keys: LuaArray<string>): void => {},
    SetVADSensitivity: (sensitivity: number): void => {},
    ShouldDiscoverChannels: (): boolean => {
        return false;
    },
    SpeakRemoteTextSample: (text: string): void => {},
    SpeakText: (
        voiceID: number,
        text: string,
        destination: VoiceTtsDestination,
        rate: number,
        volume: number
    ): void => {},
    StopSpeakingText: (): void => {},
    ToggleDeafened: (): void => {},
    ToggleMemberMuted: (playerLocation: PlayerLocationMixin): void => {},
    ToggleMuted: (): void => {},
};
export type VoiceChatActiveInputDeviceUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_ACTIVE_INPUT_DEVICE_UPDATED"
) => void;
export type VoiceChatActiveOutputDeviceUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_ACTIVE_OUTPUT_DEVICE_UPDATED"
) => void;
export type VoiceChatAudioCaptureEnergyEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_AUDIO_CAPTURE_ENERGY",
    isSpeaking: boolean,
    energy: number
) => void;
export type VoiceChatAudioCaptureStartedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_AUDIO_CAPTURE_STARTED"
) => void;
export type VoiceChatAudioCaptureStoppedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_AUDIO_CAPTURE_STOPPED"
) => void;
export type VoiceChatChannelActivatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_ACTIVATED",
    channelID: number
) => void;
export type VoiceChatChannelDeactivatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_DEACTIVATED",
    channelID: number
) => void;
export type VoiceChatChannelDisplayNameChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_DISPLAY_NAME_CHANGED",
    channelID: number,
    channelDisplayName: string
) => void;
export type VoiceChatChannelJoinedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_JOINED",
    status: VoiceChatStatusCode,
    channelID: number,
    channelType: ChatChannelType,
    clubId: string | undefined,
    streamId: string | undefined
) => void;
export type VoiceChatChannelMemberActiveStateChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_ACTIVE_STATE_CHANGED",
    memberID: number,
    channelID: number,
    isActive: boolean
) => void;
export type VoiceChatChannelMemberAddedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_ADDED",
    memberID: number,
    channelID: number
) => void;
export type VoiceChatChannelMemberEnergyChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_ENERGY_CHANGED",
    memberID: number,
    channelID: number,
    speakingEnergy: number
) => void;
export type VoiceChatChannelMemberGuidUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_GUID_UPDATED",
    memberID: number,
    channelID: number
) => void;
export type VoiceChatChannelMemberMuteForAllChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_MUTE_FOR_ALL_CHANGED",
    memberID: number,
    channelID: number,
    isMutedForAll: boolean
) => void;
export type VoiceChatChannelMemberMuteForMeChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_MUTE_FOR_ME_CHANGED",
    memberID: number,
    channelID: number,
    isMutedForMe: boolean
) => void;
export type VoiceChatChannelMemberRemovedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_REMOVED",
    memberID: number,
    channelID: number
) => void;
export type VoiceChatChannelMemberSilencedChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_SILENCED_CHANGED",
    memberID: number,
    channelID: number,
    isSilenced: boolean
) => void;
export type VoiceChatChannelMemberSpeakingStateChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_SPEAKING_STATE_CHANGED",
    memberID: number,
    channelID: number,
    isSpeaking: boolean
) => void;
export type VoiceChatChannelMemberSttMessageEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_STT_MESSAGE",
    memberID: number,
    channelID: number,
    message: string,
    language: string
) => void;
export type VoiceChatChannelMemberVolumeChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MEMBER_VOLUME_CHANGED",
    memberID: number,
    channelID: number,
    volume: number
) => void;
export type VoiceChatChannelMuteStateChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_MUTE_STATE_CHANGED",
    channelID: number,
    isMuted: boolean
) => void;
export type VoiceChatChannelPttChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_PTT_CHANGED",
    channelID: number,
    pushToTalkSetting: string
) => void;
export type VoiceChatChannelRemovedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_REMOVED",
    channelID: number
) => void;
export type VoiceChatChannelTranscribingChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_TRANSCRIBING_CHANGED",
    channelID: number,
    isTranscribing: boolean
) => void;
export type VoiceChatChannelTransmitChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_TRANSMIT_CHANGED",
    channelID: number,
    isTransmitting: boolean
) => void;
export type VoiceChatChannelVolumeChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CHANNEL_VOLUME_CHANGED",
    channelID: number,
    volume: number
) => void;
export type VoiceChatCommunicationModeChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_COMMUNICATION_MODE_CHANGED",
    communicationMode: CommunicationMode
) => void;
export type VoiceChatConnectionSuccessEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_CONNECTION_SUCCESS"
) => void;
export type VoiceChatDeafenedChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_DEAFENED_CHANGED",
    isDeafened: boolean
) => void;
export type VoiceChatErrorEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_ERROR",
    platformCode: number,
    statusCode: VoiceChatStatusCode
) => void;
export type VoiceChatInputDevicesUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_INPUT_DEVICES_UPDATED"
) => void;
export type VoiceChatLoginEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_LOGIN",
    status: VoiceChatStatusCode
) => void;
export type VoiceChatLogoutEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_LOGOUT",
    status: VoiceChatStatusCode
) => void;
export type VoiceChatMutedChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_MUTED_CHANGED",
    isMuted: boolean
) => void;
export type VoiceChatOutputDevicesUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_OUTPUT_DEVICES_UPDATED"
) => void;
export type VoiceChatPendingChannelJoinStateEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_PENDING_CHANNEL_JOIN_STATE",
    channelType: ChatChannelType,
    clubId: string | undefined,
    streamId: string | undefined,
    pendingJoin: boolean
) => void;
export type VoiceChatPttButtonPressedStateChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_PTT_BUTTON_PRESSED_STATE_CHANGED",
    isPressed: boolean
) => void;
export type VoiceChatSilencedChangedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_SILENCED_CHANGED",
    isSilenced: boolean
) => void;
export type VoiceChatSpeakForMeActiveStatusUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_SPEAK_FOR_ME_ACTIVE_STATUS_UPDATED"
) => void;
export type VoiceChatSpeakForMeFeatureStatusUpdatedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_SPEAK_FOR_ME_FEATURE_STATUS_UPDATED"
) => void;
export type VoiceChatTtsPlaybackFailedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_TTS_PLAYBACK_FAILED",
    status: VoiceTtsStatusCode,
    utteranceID: number,
    destination: VoiceTtsDestination
) => void;
export type VoiceChatTtsPlaybackFinishedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_TTS_PLAYBACK_FINISHED",
    numConsumers: number,
    utteranceID: number,
    destination: VoiceTtsDestination
) => void;
export type VoiceChatTtsPlaybackStartedEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_TTS_PLAYBACK_STARTED",
    numConsumers: number,
    utteranceID: number,
    durationMS: number,
    destination: VoiceTtsDestination
) => void;
export type VoiceChatTtsSpeakTextUpdateEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_TTS_SPEAK_TEXT_UPDATE",
    status: VoiceTtsStatusCode,
    utteranceID: number
) => void;
export type VoiceChatTtsVoicesUpdateEvent = (
    frame: UIFrame,
    e: "VOICE_CHAT_TTS_VOICES_UPDATE"
) => void;
