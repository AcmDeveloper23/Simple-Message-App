import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MessageList from "../components/Messages/MessageList";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeletedMessages } from "../utils";
import NotFound from "../components/Layout/NotFound";

const Deleted = () => {
    const [messageData, setMessageData] = useState([]);

    const messages = useSelector((state) => state.message.allMessages);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch Deleted Messages
        setMessageData(fetchDeletedMessages(messages));
    }, [messages]);

    return (
        <Layout topTitle="Deleted">
            <MessageList messageData={messageData} dispatch={dispatch} />
            {messageData.length <= 0 && <NotFound title="deleted" />}
        </Layout>
    );
};

export default Deleted;
