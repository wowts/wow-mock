import { UIFrame } from "../ui";

export const C_KnowledgeBase = {

};
export type KnowledgeBaseArticleLoadFailureEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_ARTICLE_LOAD_FAILURE") => void
export type KnowledgeBaseArticleLoadSuccessEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_ARTICLE_LOAD_SUCCESS") => void
export type KnowledgeBaseQueryLoadFailureEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_QUERY_LOAD_FAILURE") => void
export type KnowledgeBaseQueryLoadSuccessEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_QUERY_LOAD_SUCCESS") => void
export type KnowledgeBaseServerMessageEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_SERVER_MESSAGE") => void
export type KnowledgeBaseSetupLoadFailureEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_SETUP_LOAD_FAILURE") => void
export type KnowledgeBaseSetupLoadSuccessEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_SETUP_LOAD_SUCCESS") => void
export type KnowledgeBaseSystemMotdUpdatedEvent = (frame: UIFrame, e: "KNOWLEDGE_BASE_SYSTEM_MOTD_UPDATED") => void