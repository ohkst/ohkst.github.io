"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Tabs({ activeTab, setActiveTab }) {
    return (react_1.default.createElement("div", { className: "tabHeader" },
        react_1.default.createElement("div", { className: "wrap" },
            react_1.default.createElement("div", { className: "tab" },
                react_1.default.createElement("span", { className: activeTab === 'ongoing' ? 'active' : 'deactive', onClick: () => setActiveTab('ongoing') }, "\uC9C4\uD589\uC911 \uC774\uBCA4\uD2B8")),
            react_1.default.createElement("div", { className: "tab" },
                react_1.default.createElement("span", { className: activeTab === 'benefits' ? 'active' : 'deactive', onClick: () => setActiveTab('benefits') }, "\uD61C\uD0DD")))));
}
exports.default = Tabs;
