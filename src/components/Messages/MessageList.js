import React, { useState, useEffect } from "react";
import {
    makeFlaggedMessage,
    removeFlaggedMessage,
    deleteMessage,
    deleteSpamMessage,
} from "../../redux/features/messageSlice";
import { Label, Icon, Container, List, Image } from "semantic-ui-react";
import SearchBox from "../SearchBox";
import "./MessageList.css";
import { Link } from "react-router-dom";

const MessageList = ({
    messageData,
    dispatch,
    fromSpamPage,
    fromFlaggedPage,
}) => {
    const [messages, setMessages] = useState(messageData);

    // Updating the props to state
    useEffect(() => {
        setMessages(messageData);
    }, [messageData]);

    return (
        <>
            <Container textAlign="center">
                <SearchBox messageData={messages} />
            </Container>
            <Container fluid>
                <List className="message__list" divided verticalAlign="middle">
                    {messages.length >= 1 &&
                        messages.map((item) => (
                            <List.Item
                                key={item.id}
                                className="message__list__item"
                            >
                                <Image avatar src={item.avatar} />

                                <List.Content>
                                    <List.Header
                                        style={{ lineHeight: "1.8rem" }}
                                    >
                                        {item.name}
                                    </List.Header>
                                    <List.Description>
                                        <span className="message__description__mble">
                                            {item.message.slice(0, 15)}...
                                        </span>
                                        <span className="message__description">
                                            {item.message.slice(0, 100)}...
                                        </span>
                                    </List.Description>
                                    <List.Description>
                                        <Link to={`/details/${item.id}`}>
                                            view more
                                        </Link>
                                    </List.Description>
                                </List.Content>

                                <List.Content
                                    floated="right"
                                    className="message__actions"
                                >
                                    <p>{item.dateTime}</p>
                                    {!item.isRead && (
                                        <Label size="mini" color="teal">
                                            1
                                        </Label>
                                    )}{" "}
                                    {!item.isDeleted &&
                                        (item.isFlagged ? (
                                            <Icon
                                                name="flag"
                                                onClick={() =>
                                                    dispatch(
                                                        removeFlaggedMessage(
                                                            item.id
                                                        )
                                                    )
                                                }
                                                size="large"
                                            />
                                        ) : (
                                            <Icon
                                                name="flag outline"
                                                onClick={() =>
                                                    dispatch(
                                                        makeFlaggedMessage(
                                                            item.id
                                                        )
                                                    )
                                                }
                                                size="large"
                                            />
                                        ))}{" "}
                                    {!item.isDeleted &&
                                        !fromFlaggedPage &&
                                        (fromSpamPage ? (
                                            <Icon
                                                color="red"
                                                name="trash alternate"
                                                size="large"
                                                onClick={() =>
                                                    dispatch(
                                                        deleteSpamMessage(
                                                            item.id
                                                        )
                                                    )
                                                }
                                            />
                                        ) : (
                                            <Icon
                                                color="red"
                                                name="trash alternate"
                                                size="large"
                                                onClick={() =>
                                                    dispatch(
                                                        deleteMessage(item.id)
                                                    )
                                                }
                                            />
                                        ))}
                                </List.Content>
                            </List.Item>
                        ))}
                </List>
            </Container>
        </>
    );
};

export default MessageList;
