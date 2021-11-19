import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import MessageList from "../components/Messages/MessageList";
import { useSelector, useDispatch } from "react-redux";
import { fetchInboxMessages } from "../utils";

const Home = () => {
    const [messageData, setMessageData] = useState([]);

    const messages = useSelector((state) => state.message.allMessages);

    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch Inbox Messages
        setMessageData(fetchInboxMessages(messages));
    }, [messages]);

    return (
        <Layout topTitle="Inbox">
            <MessageList messageData={messageData} dispatch={dispatch} />
        </Layout>
    );
};

export default Home;
