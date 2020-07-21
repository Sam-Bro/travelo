import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./App";
import Funds from "./pages/Funds";
import Translate from "./pages/Translate";
import CurrencyC from "./pages/CurrencyC";
import registerServiceWorker from "./registerServiceWorker";

const routing = (
    <Router>
        <section>
            <Route exact path="/" component={App} />
            <Route path="/funds" component={Funds} />
            <Route path="/translate" component={Translate} />
            <Route path="/currencyC" component={CurrencyC} />
        </section>
    </Router>
)



ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();



