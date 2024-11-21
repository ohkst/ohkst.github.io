
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
const react_router_dom_1 = require("react-router-dom");
require("../styles/EventDetail.css");
const EventContent_1 = __importDefault(require("./EventContent"));
const EventRegister_1 = __importDefault(require("./EventRegister"));
const Tabs_1 = __importDefault(require("../components/Tabs"));
const eventDetails = {
    0: { title: "00해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15" },
    1: { title: "Bankis 해외주식 신규 $30 이벤트", dateRange: "2024.09.27 ~ 2024.12.31" },
    2: { title: "해외주식 거래", dateRange: "2024.10.07 ~ 2024.11.15" },
    3: { title: "BanKIS 계좌개설 이벤트", dateRange: "2024.10.01 ~ 2024.12.31" }
};
function EventDetail() {
    const { id } = (0, react_router_dom_1.useParams)();
    const index = parseInt(id || '0', 10);
    const event = eventDetails[index];
    const tabs = [
        { id: 'contents', title: '이벤트 내용보기' },
        { id: 'register', title: '이벤트 참여하기' },
    ];
    const [activeTab, setActiveTab] = (0, react_1.useState)('contents');
    if (!event) {
        return react_1.default.createElement("p", null, "\uD574\uB2F9 \uC774\uBCA4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");
    }
    return (react_1.default.createElement("div", { className: "event-detail" },
        react_1.default.createElement("h2", { id: "eventTitle" }, event.title),
        react_1.default.createElement("p", { id: "dateRange" }, event.dateRange),
        react_1.default.createElement("span", { className: "shareButton" },
            react_1.default.createElement("span", { id: "shareLabel" }, "\uACF5\uC720\uD558\uAE30")),
        react_1.default.createElement("div", { className: "tabHeader" },
            react_1.default.createElement("div", { className: "wrap" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(Tabs_1.default, { activeTab: activeTab, setActiveTab: setActiveTab, tabs: tabs }),
                    activeTab === 'contents' && react_1.default.createElement(EventContent_1.default, null),
                    activeTab === 'register' && react_1.default.createElement(EventRegister_1.default, null))))));
}
exports.default = EventDetail;
