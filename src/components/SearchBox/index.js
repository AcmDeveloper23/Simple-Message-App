import React, { useState, useEffect } from "react";
import { Image, List, Search } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
var _ = require("lodash");

// For showing DropDown(Search) Values
const ResultRenderer = ({ id, avatar, name }) => {
    return (
        <List key={id}>
            <List.Item>
                <Image src={avatar} alt="ProfilePic" avatar />
                <List.Content header={name} as="a" />
            </List.Item>
        </List>
    );
};

const SearchBox = ({ messageData }) => {
    const history = useHistory();

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [messageResults, setMessageResults] = useState([]);

    const handleChange = (e) => {
        const { value } = e.target;

        setText(value);
        // For Passing empty value
        if (value.length === 0) return;

        //trim will remove white spaces.
        if (value.trim().length === 0) return;

        setLoading(true);

        // For Reg Expressions
        const re = new RegExp(_.escapeRegExp(value), "i");
        // New Data based on Value user entered
        const isData = messageData.filter((s) => re.test(s.name));
        setMessageResults(isData);
        setLoading(false);
    };

    useEffect(() => {
        if (messageData) setMessageResults(messageData);
    }, [messageData]);

    return (
        <>
            <Search
                fluid
                loading={loading}
                placeholder={"Search messages..."}
                results={messageResults}
                onResultSelect={(e, data) =>
                    history.push(`/details/${data.result.id}`)
                }
                onSearchChange={handleChange}
                resultRenderer={ResultRenderer}
                minCharacters={1}
                value={text}
            />
        </>
    );
};

export default SearchBox;
