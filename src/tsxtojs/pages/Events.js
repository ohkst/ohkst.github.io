
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
const Tabs_1 = __importDefault(require("../components/Tabs"));
const Filters_1 = __importDefault(require("../components/Filters"));
const OngoingEvents_1 = __importDefault(require("./OngoingEvents"));
const Benefits_1 = __importDefault(require("./Benefits"));
function Events() {
    // const { id } = useParams();
    // const index = parseInt(id || '0', 10);
    const tabs = [
        { id: 'ongoing', title: '진행중 이벤트' },
        { id: 'benefits', title: '혜택' },
    ];
    const [activeTab, setActiveTab] = (0, react_1.useState)('ongoing');
    const tabsProps = {
        tabs,
        activeTab,
        setActiveTab,
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Tabs_1.default, Object.assign({}, tabsProps)),
        activeTab !== 'benefits' && react_1.default.createElement(Filters_1.default, { activeTab: '', setActiveTab: setActiveTab }),
        activeTab === 'ongoing' && react_1.default.createElement(OngoingEvents_1.default, null),
        activeTab === 'benefits' && react_1.default.createElement(Benefits_1.default, null)));
}
exports.default = Events;
