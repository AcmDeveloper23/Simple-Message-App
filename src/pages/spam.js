import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MessageList from "../components/Messages/MessageList";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpamMessages } from "../utils";

const Spam = () => {
    const [messageData, setMessageData] = useState([]);

    const messages = useSelector((state) => state.message.allMessages);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch Spam Messages
        setMessageData(fetchSpamMessages(messages));
    }, [messages]);

    return (
        <Layout topTitle="Spam">
            <MessageList
                messageData={messageData}
                dispatch={dispatch}
                fromSpamPage={true}
            />
        </Layout>
    );
};

export default Spam;
