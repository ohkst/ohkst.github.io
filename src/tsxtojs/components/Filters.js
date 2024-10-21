"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ic_arrow_down_20_png_1 = __importDefault(require("../images/ic_arrow_down_20.png"));
function Filters({ activeTab, setActiveTab }) {
    const [overlayVisible, setOverlayVisible] = (0, react_1.useState)(false);
    const [activeFilter, setActiveFilter] = (0, react_1.useState)(null);
    const filterTypes = [
        "전체",
        "국내",
        "해외",
        "금융상품",
        "기타",
    ];
    const filterAvalable = [
        "참여가능",
        "전체",
    ];
    const handleFilterClick = (filterType) => {
        setActiveFilter(filterType);
        setOverlayVisible(!overlayVisible);
    };
    const handleOverlayClick = () => {
        setOverlayVisible(false);
    };
    return (react_1.default.createElement("div", { className: "filterWrap" },
        react_1.default.createElement("span", { className: "filterTab", onClick: () => handleFilterClick('type') },
            "\uC720\uD615",
            react_1.default.createElement("img", { id: "filterArrowDown", alt: "", src: ic_arrow_down_20_png_1.default })),
        react_1.default.createElement("span", { className: "filterTab", onClick: () => handleFilterClick('available') },
            "\uCC38\uC5EC\uAC00\uB2A5",
            react_1.default.createElement("img", { id: "filterArrowDown", alt: "", src: ic_arrow_down_20_png_1.default })),
        overlayVisible && (react_1.default.createElement("div", { className: "overlay", onClick: handleOverlayClick },
            react_1.default.createElement("div", { className: "overlayContent", onClick: (e) => e.stopPropagation() }, (activeFilter === 'type' ? filterTypes : filterAvalable).map((option, index) => (react_1.default.createElement("div", { key: index, className: "filterItem" }, option)
            // {/* 원하는 필터 옵션들을 추가하세요 */}
            )))))));
}
exports.default = Filters;
