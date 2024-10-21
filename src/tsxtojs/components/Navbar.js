"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ic_navi_back_24_png_1 = __importDefault(require("../images/ic_navi_back_24.png"));
function Navbar() {
    return (react_1.default.createElement("nav", { id: "naviHeader" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { className: "imgNaviBack", src: ic_navi_back_24_png_1.default, alt: "" })),
        react_1.default.createElement("li", { id: "brand" }, "\uC774\uBCA4\uD2B8")));
}
exports.default = Navbar;
