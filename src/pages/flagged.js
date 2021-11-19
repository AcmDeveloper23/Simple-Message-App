import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MessageList from "../components/Messages/MessageList";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlaggedMessages } from "../utils";

const Flagged = () => {
    const [messageData, setMessageData] = useState([]);

    const messages = useSelector((state) => state.message.allMessages);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch Flagged Messages
        setMessageData(fetchFlaggedMessages(messages));
    }, [messages]);

    return (
        <Layout topTitle="Flagged">
            <MessageList
                messageData={messageData}
                dispatch={dispatch}
                fromFlaggedPage={true}
            />
        </Layout>
    );
};

export default Flagged;
