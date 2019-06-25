export const UNHIGHLIGHT_CHAT = '@@message/UNHIGHLIGHT_CHAT';

export const unhighlightChat = () => ({
    type: UNHIGHLIGHT_CHAT,
});

export const HIGHLIGHT_CHAT = '@@message/HIGHLIGHT_CHAT';

export const highlightChat = (chatId) => ({
    type: HIGHLIGHT_CHAT,
    chatId,
});

