"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styledComponents_1 = require("styledComponents");
require("react-multi-email/style.css");
var samples_1 = require("samples");
var components_1 = require("components");
var basicRaw = require('!raw-loader!../samples/Basic.tsx');
var customizeStyleRaw = require('!raw-loader!../samples/CustomizeStyle.tsx');
var axuiLogo = require('assets/axui-logo.png');
var GitHubButton = require('react-github-button');
var Component = styledComponents_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .app-header {\n    background: #333;\n    color: #fff;\n    padding-top: 1em;\n    padding-bottom: 3em;\n    margin-bottom: 2em;\n\n    .logo-img {\n      width: 100px;\n      img {\n        width: 100%;\n        display: block;\n      }\n    }\n    h1 {\n      color: #fff;\n      font-size: 36px;\n      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);\n      font-family: 'Montserrat', sans-serif;\n      margin: 0.2em 0;\n    }\n\n    .github-btn {\n      .gh-count {\n        margin-right: 1em;\n      }\n    }\n\n    &:after {\n      content: '';\n      display: block;\n      clear: both;\n    }\n  }\n"], ["\n  .app-header {\n    background: #333;\n    color: #fff;\n    padding-top: 1em;\n    padding-bottom: 3em;\n    margin-bottom: 2em;\n\n    .logo-img {\n      width: 100px;\n      img {\n        width: 100%;\n        display: block;\n      }\n    }\n    h1 {\n      color: #fff;\n      font-size: 36px;\n      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);\n      font-family: 'Montserrat', sans-serif;\n      margin: 0.2em 0;\n    }\n\n    .github-btn {\n      .gh-count {\n        margin-right: 1em;\n      }\n    }\n\n    &:after {\n      content: '';\n      display: block;\n      clear: both;\n    }\n  }\n"])));
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Index.prototype.render = function () {
        return (React.createElement(Component, null, React.createElement("header", { className: 'app-header' }, React.createElement(styledComponents_1.StyledContainer, null, React.createElement("div", { className: 'logo-img' }, React.createElement("img", { src: axuiLogo })), React.createElement("h1", null, "react-multi-email"), React.createElement("div", null, React.createElement(GitHubButton, { type: "stargazers", namespace: "axui", repo: "react-multi-email" }), ' ', React.createElement(GitHubButton, { type: "forks", namespace: "axui", repo: "react-multi-email" }), React.createElement("img", { src: "https://badge.fury.io/js/react-multi-email.svg" }), ' ', React.createElement("img", { src: "https://img.shields.io/npm/dm/react-multi-email.svg" }), ' '))), React.createElement(styledComponents_1.StyledContainer, null, React.createElement("h2", null, "Installation"), React.createElement(components_1.CodeViewer, null, "npm install react-multi-email -S"), React.createElement(components_1.CodeViewer, { code: "\nimport 'react-multi-email/style.css';\nimport { ReactMultiEmail } from 'react-multi-email';\n" }), React.createElement("h2", null, "basic"), React.createElement(samples_1.Basic, null), React.createElement(components_1.CodeViewer, { code: basicRaw }), React.createElement("h2", null, "customize style"), React.createElement(samples_1.CustomizeStyle, null), React.createElement(components_1.CodeViewer, { code: customizeStyleRaw }))));
    };
    return Index;
}(React.Component));
exports.default = Index;
var templateObject_1;
//# sourceMappingURL=Sample.js.map