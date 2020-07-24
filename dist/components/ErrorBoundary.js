"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ErrorBoundary extends React.Component {
    componentDidCatch() {
        if (process.env.NODE_ENV === 'production') {
            typeof window !== 'undefined' && window.location.reload(true);
        }
    }
    render() {
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map