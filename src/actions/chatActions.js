export const CHAT_MANAGER = '@@chat/CHAT_MANAGER';

export const chatManager = (messageId, chatId) => ({
    type: CHAT_MANAGER,
    messageId,
    chatId,
});