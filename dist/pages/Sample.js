"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styledComponents_1 = require("styledComponents");
require("react-multi-email/style.css");
const samples_1 = require("samples");
const components_1 = require("components");
const basicRaw = require('!raw-loader!../samples/Basic.tsx');
const customizeStyleRaw = require('!raw-loader!../samples/CustomizeStyle.tsx');
const axuiLogo = require('assets/axui-logo.png');
const GitHubButton = require('react-github-button');
const Component = styledComponents_1.styled.div `
  .app-header {
    background: #333;
    color: #fff;
    padding-top: 1em;
    padding-bottom: 3em;
    margin-bottom: 2em;

    .logo-img {
      width: 100px;
      img {
        width: 100%;
        display: block;
      }
    }
    h1 {
      color: #fff;
      font-size: 36px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
      font-family: 'Montserrat', sans-serif;
      margin: 0.2em 0;
    }

    .github-btn {
      .gh-count {
        margin-right: 1em;
      }
    }

    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
`;
class Index extends React.Component {
    render() {
        return (React.createElement(Component, null,
            React.createElement("header", { className: 'app-header' },
                React.createElement(styledComponents_1.StyledContainer, null,
                    React.createElement("div", { className: 'logo-img' },
                        React.createElement("img", { src: axuiLogo })),
                    React.createElement("h1", null, "react-multi-email"),
                    React.createElement("div", null,
                        React.createElement(GitHubButton, { type: "stargazers", namespace: "axui", repo: "react-multi-email" }),
                        ' ',
                        React.createElement(GitHubButton, { type: "forks", namespace: "axui", repo: "react-multi-email" }),
                        React.createElement("img", { src: "https://badge.fury.io/js/react-multi-email.svg" }),
                        ' ',
                        React.createElement("img", { src: "https://img.shields.io/npm/dm/react-multi-email.svg" }),
                        ' '))),
            React.createElement(styledComponents_1.StyledContainer, null,
                React.createElement("h2", null, "Installation"),
                React.createElement(components_1.CodeViewer, null, "npm install react-multi-email -S"),
                React.createElement(components_1.CodeViewer, { code: `
import 'react-multi-email/style.css';
import { ReactMultiEmail } from 'react-multi-email';
` }),
                React.createElement("h2", null, "basic"),
                React.createElement(samples_1.Basic, null),
                React.createElement(components_1.CodeViewer, { code: basicRaw }),
                React.createElement("h2", null, "customize style"),
                React.createElement(samples_1.CustomizeStyle, null),
                React.createElement(components_1.CodeViewer, { code: customizeStyleRaw }))));
    }
}
exports.default = Index;
//# sourceMappingURL=Sample.js.map