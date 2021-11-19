import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Icon, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Sidebar = ({ toggleBtn }) => {
    const inboxCount = useSelector((state) => state.message.inboxCount);
    const flaggedCount = useSelector((state) => state.message.flaggedCount);
    const spamCount = useSelector((state) => state.message.spamCount);
    const deletedCount = useSelector((state) => state.message.deletedCount);

    return (
        <div
            className={`${toggleBtn ? "sidebar collapse" : "sidebar"}`}
            data-simplebar
        >
            <ul>
                <li>
                    <Link to="/">
                        <span className="icon">
                            <Icon name="inbox" />
                        </span>
                        <span className="title">
                            Inbox <Label color="teal">{inboxCount || 0}</Label>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/flagged">
                        <span className="icon">
                            {/* <i className={`fas fa-${item.icon}`} /> */}
                            <Icon name="flag outline" />
                        </span>
                        <span className="title">
                            Flagged{" "}
                            <Label color="teal">{flaggedCount || 0}</Label>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/spam">
                        <span className="icon">
                            {/* <i className={`fas fa-${item.icon}`} /> */}
                            <Icon name="exclamation triangle" />
                        </span>
                        <span className="title">
                            Spam <Label color="teal">{spamCount || 0}</Label>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/deleted">
                        <span className="icon">
                            {/* <i className={`fas fa-${item.icon}`} /> */}
                            <Icon name="trash alternate outline" />
                        </span>
                        <span className="title">
                            Deleted{" "}
                            <Label color="teal">{deletedCount || 0}</Label>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar;
