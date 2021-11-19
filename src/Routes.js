import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Flagged from "./pages/flagged";
import Spam from "./pages/spam";
import Deleted from "./pages/deleted";
import Details from "./pages/details";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/flagged" exact component={Flagged} />
                <Route path="/spam" exact component={Spam} />
                <Route path="/deleted" exact component={Deleted} />
                <Route path="/details/:id" exact component={Details} />
            </Switch>
        </Router>
    );
};

export default Routes;
