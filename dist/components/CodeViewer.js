"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const prism_light_1 = require("react-syntax-highlighter/prism-light");
const jsx_1 = require("react-syntax-highlighter/languages/prism/jsx");
const darcula_1 = require("react-syntax-highlighter/styles/prism/darcula");
function trimLineBreak(x) {
    return x.replace(/^\r?\n+/, '').replace(/\r?\n+\s*$/, '');
}
class CodeViewer extends React.Component {
    render() {
        prism_light_1.registerLanguage('jsx', jsx_1.default);
        darcula_1.default['pre[class*="language-"]'].borderRadius = '5px';
        darcula_1.default['pre[class*="language-"]'].border = '1px solid #e7e7e7';
        return (React.createElement(prism_light_1.default, { language: "jsx", style: darcula_1.default }, this.props.code
            ? trimLineBreak(this.props.code)
            : trimLineBreak('' + this.props.children)));
    }
}
exports.default = CodeViewer;
//# sourceMappingURL=CodeViewer.js.map