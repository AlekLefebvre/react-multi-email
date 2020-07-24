"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
            };
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
var react_multi_email_1 = require("react-multi-email");
var Basic = /** @class */ (function (_super) {
    __extends(Basic, _super);
    function Basic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            emails: [],
        };
        return _this;
    }
    Basic.prototype.render = function () {
        var _this = this;
        var emails = this.state.emails;
        return (React.createElement(React.Fragment, null, React.createElement("form", null, React.createElement("h3", null, "Email"), React.createElement(react_multi_email_1.ReactMultiEmail, { placeholder: "Input your email", emails: emails, onChange: function (_emails) {
                _this.setState({ emails: _emails });
            }, getLabel: function (email, index, removeEmail) {
                return (React.createElement("div", { "data-tag": true, key: index }, React.createElement("div", { "data-tag-item": true }, email), React.createElement("span", { "data-tag-handle": true, onClick: function () { return removeEmail(index); } }, "\u00D7")));
            } }), React.createElement("br", null), React.createElement("h4", null, "react-multi-email value"), React.createElement("p", null, emails.join(', ') || 'empty'))));
    };
    return Basic;
}(React.Component));
exports.default = Basic;
//# sourceMappingURL=Basic.js.map