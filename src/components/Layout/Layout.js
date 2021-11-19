import React, { useState } from "react";
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import Content from "./Content";
import { Helmet } from "react-helmet-async";

const Layout = ({ children, topTitle }) => {
    const [toggleBtn, setToggleBtn] = useState(true);
    const toggle = () => setToggleBtn((val) => !val);

    return (
        <>
            <Helmet>
                <title>{`${topTitle} | Mail app`}</title>
            </Helmet>
            <div className="top-wrapper">
                <Navbar setToggle={toggle} />
                <Sidebar toggleBtn={toggleBtn} />
                <Content toggleBtn={toggleBtn}>{children}</Content>
            </div>
        </>
    );
};

export default Layout;
