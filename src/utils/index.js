// For fetching only Inbox Messages
export const fetchInboxMessages = (messageData) => {
    const messages = [];
    for (let item in messageData) {
        // Skips Deleted and Spam Messages
        if (messageData[item]?.isDeleted || messageData[item]?.isSpam) continue;

        messages.push(messageData[item]);
    }
    return messages;
};

// For fetching only Flagged Messages
export const fetchFlaggedMessages = (messageData) => {
    const messages = [];
    for (let item in messageData) {
        // push isFlagged true message and skips deleted message
        if (messageData[item]?.isFlagged && !messageData[item]?.isDeleted)
            messages.push(messageData[item]);
    }
    return messages;
};

// For fetching only Spam Messages
export const fetchSpamMessages = (messageData) => {
    const messages = [];
    for (let item in messageData) {
        // push isSpam true message and skips deleted message
        if (messageData[item]?.isSpam && !messageData[item]?.isDeleted)
            messages.push(messageData[item]);
    }
    return messages;
};

// For fetching only Deleted Messages
export const fetchDeletedMessages = (messageData) => {
    const messages = [];
    for (let item in messageData) {
        // push only isDeleted true message
        if (messageData[item]?.isDeleted) messages.push(messageData[item]);
    }
    return messages;
};

// Make Unread message to read
export const createReadMessage = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches, update isRead field to true
        if (messageId === messageData[i].id) {
            messageData[i].isRead = true;
        }
    }
    return messageData;
};

// Make flagged Message
export const createFlagMessage = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches, update isFlagged field to true
        if (messageId === messageData[i].id) {
            messageData[i].isFlagged = true;
        }
    }
    return messageData;
};

// Remove flagged Message
export const removeFlagMessage = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches, update isRead field to false for remove
        if (messageId === messageData[i].id) messageData[i].isFlagged = false;
    }
    return messageData;
};

// Delete Message By Id
export const deleteMessageById = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches, update isDeleted field to true for Delete
        if (messageId === messageData[i].id) messageData[i].isDeleted = true;
    }
    return messageData;
};

// get Message Details By Id
export const getMessageDetailsById = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches, it will return its data
        if (Number(messageId) === messageData[i].id) return messageData[i];
    }
    return "";
};

// Check flagged Message
export const checkFlagMessage = (messageId, messageData) => {
    for (let i = 0; i < messageData.length; i++) {
        // If both Id matches
        if (messageId === messageData[i].id) {
            // Checking if the message isFLagged or not
            if (messageData[i].isFlagged) {
                // removing the flagged message and return true
                messageData[i].isFlagged = false;
                return true;
            } else {
                // If the data is not the flagged message, then simply return false
                return false;
            }
        }
    }
    return false;
};
