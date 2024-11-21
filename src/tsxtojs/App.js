
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Events_1 = __importDefault(require("./pages/Events"));
const EventDetail_1 = __importDefault(require("./pages/EventDetail"));
const AwsHealth_1 = __importDefault(require("./pages/AwsHealth"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "windowFrame" },
            react_1.default.createElement(Navbar_1.default, null),
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Events_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/event/:id", element: react_1.default.createElement(EventDetail_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/aws/health", element: react_1.default.createElement(AwsHealth_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(NotFound_1.default, null) })))));
}
exports.default = App;
