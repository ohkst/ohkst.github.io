
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/Checkbox.css");
function Checkbox({ checked, onChange, iconOn, iconOff, label, labelClass, }) {
    return (react_1.default.createElement("label", null,
        react_1.default.createElement("input", { id: "checkbox", type: "checkbox", checked: checked, onChange: onChange }),
        react_1.default.createElement("img", { id: "checkIcon", src: checked ? iconOn : iconOff, alt: "\uCCB4\uD06C\uBC15\uC2A4" }),
        react_1.default.createElement("span", { className: labelClass }, label)));
}
exports.default = Checkbox;
