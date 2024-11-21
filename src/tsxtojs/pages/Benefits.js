
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../styles/Benefit.css");
function Benefits() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = (id) => {
        navigate('/event/' + id);
    };
    return (react_1.default.createElement("div", { className: "benefits" },
        react_1.default.createElement("div", { id: "benefitBg" },
            react_1.default.createElement("div", { className: "btnGroup" },
                react_1.default.createElement("button", { className: "btn1", type: "button", onClick: () => handleClick("2") }, "\uB300\uC0C1 \uC5EC\uBD80 \uC870\uD68C"),
                react_1.default.createElement("button", { className: "btn2", type: "button", onClick: () => window.open("https://m.koreainvestment.com/app/mtsrenewal.jsp?type=06&SSO_SCREENNO=3911") }, "\uD574\uC678\uAC70\uB798\uC11C\uBE44\uC2A4 \uC2E0\uCCAD\uD558\uAE30"),
                react_1.default.createElement("button", { className: "btn3", type: "button", onClick: () => handleClick("3") }, "\uC774\uBCA4\uD2B8 \uC2E0\uCCAD\uD558\uAE30"),
                react_1.default.createElement("button", { className: "btn4", type: "button", onClick: () => handleClick("3") }, "\uC8FC\uC2DD \uCD94\uCCA8\uD558\uAE30"),
                react_1.default.createElement("button", { className: "btn5", type: "button" }, "\uBBF8\uCC38\uAC00\uC911")))));
}
exports.default = Benefits;
