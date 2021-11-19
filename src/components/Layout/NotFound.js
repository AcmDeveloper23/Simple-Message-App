import React from "react";
import { Message } from "semantic-ui-react";

const NotFound = ({ title }) => {
    return (
        <Message negative>
            <Message.Header>No {title} message found!</Message.Header>
        </Message>
    );
};

export default NotFound;
