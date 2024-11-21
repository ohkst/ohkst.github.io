
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function EventCard(props) {
    return (react_1.default.createElement("div", { className: "event-card" },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/event/${props.id}` },
            react_1.default.createElement("img", { className: "event-card-image", src: props.imagePath, alt: "" }))));
}
exports.default = EventCard;
