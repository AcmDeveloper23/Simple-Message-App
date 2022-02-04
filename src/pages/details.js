import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Icon, Segment, Header, Image } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { getMessageDetailsById } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import {
    makeMessageAsRead,
    makeSpamMessageAsRead,
    makeDeletedMessageAsRead
} from "../redux/features/messageSlice";

const Details = ({ match }) => {
    const history = useHistory();

    const messages = useSelector((state) => state.message.allMessages);

    const dispatch = useDispatch();

    const [messageDetails, setMessageDetails] = useState("");

    const goBackUrl = () => {
        history.goBack();
    };

    useEffect(() => {
        if (match.params.id) {
            const data = getMessageDetailsById(match.params.id, messages);
            setMessageDetails(data);
            // here it can check the message is read or unread and redirect to details page
            if (!data.isRead) {
                // for deleted page, just make message as read
                if (data.isDeleted) return dispatch(makeDeletedMessageAsRead(data.id));
                // for spam page, make message as read and reduce spam count;
                if (data.isSpam) return dispatch(makeSpamMessageAsRead(data.id));
                // For inbox, make message as read and reduce inbox count;
                return dispatch(makeMessageAsRead(data.id));
            }
        }
    }, [match.params.id, messages, dispatch]);

    return (
        <Layout topTitle={"Details"}>
            <span style={{ cursor: "pointer" }} onClick={() => goBackUrl()}>
                <Icon name="arrow circle left" size="big" />
            </span>

            <Segment>
                {messages && (
                    <>
                        <Header as="h2">
                            <Image circular src={messageDetails.avatar} />{" "}
                            {messageDetails.name}
                        </Header>
                        <p style={{ fontSize: "16px" }}>
                            {messageDetails.message}
                        </p>
                        <span>
                            Message at <em>{messageDetails.dateTime}</em>
                        </span>
                    </>
                )}
            </Segment>
        </Layout>
    );
};

export default Details;
