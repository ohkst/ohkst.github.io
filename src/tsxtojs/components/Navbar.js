"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ic_navi_back_24_png_1 = __importDefault(require("../images/ic_navi_back_24.png"));
function Navbar() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    const handleBackButtonClick = () => {
        navigate(-1);
    };
    const titleMap = {
        '/': '이벤트',
        '/event/:id': '이벤트 상세',
    };
    const getTitleName = () => {
        return location.pathname.startsWith('/event/') ? '이벤트 상세' : titleMap[location.pathname];
    };
    return (react_1.default.createElement("nav", { id: "naviHeader" },
        react_1.default.createElement("span", { onClick: handleBackButtonClick },
            react_1.default.createElement("img", { className: "imgNaviBack", src: ic_navi_back_24_png_1.default, alt: "" })),
        react_1.default.createElement("li", { id: "naviTitle" }, getTitleName())));
}
exports.default = Navbar;
