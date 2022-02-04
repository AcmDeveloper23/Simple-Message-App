import { createSlice } from "@reduxjs/toolkit";
import { messageData } from "../../data/messages";
import {
    fetchInboxMessages,
    fetchFlaggedMessages,
    fetchSpamMessages,
    fetchDeletedMessages,
    createReadMessage,
    createFlagMessage,
    removeFlagMessage,
    deleteMessageById,
} from "../../utils";

const initialState = {
    allMessages: messageData,
    inboxCount: fetchInboxMessages(messageData).length,
    flaggedCount: fetchFlaggedMessages(messageData).length,
    spamCount: fetchSpamMessages(messageData).length,
    deletedCount: fetchDeletedMessages(messageData).length,
};

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        // make message as read
        makeMessageAsRead: (state, action) => {
            state.inboxCount -= 1;
            state.allMessages = createReadMessage(
                action.payload,
                state.allMessages
            );
        },
        // make only spam message as read
        makeSpamMessageAsRead: (state, action) => {
            state.spamCount -= 1;
            state.allMessages = createReadMessage(
                action.payload,
                state.allMessages
            );
        },
        //create Flagged Message
        makeFlaggedMessage: (state, action) => {
            state.flaggedCount += 1;
            state.allMessages = createFlagMessage(
                action.payload,
                state.allMessages
            );
        },
        // remove flagged Message
        removeFlaggedMessage: (state, action) => {
            state.flaggedCount -= 1;
            state.allMessages = removeFlagMessage(
                action.payload,
                state.allMessages
            );
        },
        deleteMessage: (state, action) => {
            console.log("action", action);
            state.deletedCount += 1;
            state.allMessages = deleteMessageById(
                action.payload.id,
                state.allMessages
            );
            // If it is flagged, then remove flagged data and decrement count
            if (action.payload.isFlagged) return state.flaggedCount -= 1;

            if (action.payload.isSpam) {
                if (!action.payload.isRead) {
                    state.spamCount -= 1;
                    return;
                }
            }
            if (!action.payload.isRead) {
                state.inboxCount -= 1;
            }
        },
        // make deleted unread message as read
        makeDeletedMessageAsRead: (state, action) => {
            state.allMessages = createReadMessage(
                action.payload,
                state.allMessages
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    makeMessageAsRead,
    makeSpamMessageAsRead,
    makeFlaggedMessage,
    makeDeletedMessageAsRead,
    removeFlaggedMessage,
    deleteMessage,
} = messageSlice.actions;

export default messageSlice.reducer;
