"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("styles/globals");
const react_router_dom_1 = require("react-router-dom");
const react_hot_loader_1 = require("react-hot-loader");
const components_1 = require("components");
require("styles/globals");
const Sample_1 = require("./Sample");
class App extends React.Component {
    render() {
        return (React.createElement(components_1.ErrorBoundary, null,
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Sample_1.default }),
                    React.createElement(react_router_dom_1.Route, { component: components_1.NoMatch })))));
    }
}
exports.default = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map