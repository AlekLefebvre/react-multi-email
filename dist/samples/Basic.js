"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_multi_email_1 = require("react-multi-email");
class Basic extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            emails: [],
        };
    }
    render() {
        const { emails } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement("form", null,
                React.createElement("h3", null, "Email"),
                React.createElement(react_multi_email_1.ReactMultiEmail, { placeholder: "Input your email", emails: emails, onChange: (_emails) => {
                        this.setState({ emails: _emails });
                    }, getLabel: (email, index, removeEmail) => {
                        return (React.createElement("div", { "data-tag": true, key: index },
                            React.createElement("div", { "data-tag-item": true }, email),
                            React.createElement("span", { "data-tag-handle": true, onClick: () => removeEmail(index) }, "\u00D7")));
                    } }),
                React.createElement("br", null),
                React.createElement("h4", null, "react-multi-email value"),
                React.createElement("p", null, emails.join(', ') || 'empty'))));
    }
}
exports.default = Basic;
//# sourceMappingURL=Basic.js.map