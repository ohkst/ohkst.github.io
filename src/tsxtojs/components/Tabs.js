
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Tabs({ activeTab, setActiveTab, tabs }) {
    return (react_1.default.createElement("div", { className: "tabHeader" },
        react_1.default.createElement("div", { className: "wrap" },
            react_1.default.createElement("div", { className: "tab" }, tabs.map((tab, index) => (react_1.default.createElement("span", { key: index, className: activeTab === tab.id ? 'active' : 'deactive', onClick: () => setActiveTab(tab.id) }, tab.title)))))));
}
exports.default = Tabs;
