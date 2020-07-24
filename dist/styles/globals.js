"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const styled_normalize_1 = require("styled-normalize");
require("./antd-theme.less");
require("react-github-button/assets/style.css");
styled_components_1.injectGlobal `
  ${styled_normalize_1.default}
 
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
`;
//# sourceMappingURL=globals.js.map