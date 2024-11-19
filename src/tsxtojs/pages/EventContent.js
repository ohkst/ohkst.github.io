"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../styles/EventContent.css");
const eventDetails = {
    0: { title: "Bankis 해외주식 신규 $30 이벤트", imgName: "img_bankis_ff_30dollar_2410" },
    1: { title: "Bankis 해외주식 신규 $30 이벤트", imgName: "img_bankis_ff_30dollar_2410" },
    2: { title: "해외주식 거래", imgName: "23161753img_fs_exchange_plus_event_2408" },
    3: { title: "BanKIS 계좌개설 이벤트", imgName: "img_bankis_direct_event_2212" }
};
function EventContent() {
    const { id } = (0, react_router_dom_1.useParams)();
    const index = parseInt(id || '0', 10);
    const event = eventDetails[index];
    const imageUrl = "https://file.truefriend.com/updata/namo/" + event.imgName + ".png";
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { id: "detailImage", src: imageUrl, alt: "" })));
}
exports.default = EventContent;
