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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const EventCard_1 = __importDefault(require("../components/EventCard"));
const api_1 = require("../API/api");
const APIEndPoint = {
    GetTest: "posts",
    PostTest: "posts",
};
Object.freeze(APIEndPoint);
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, api_1.getData)(APIEndPoint.GetTest);
            console.log(data);
        }
        catch (error) {
            console.error("데이터 가져오기 실패", error);
        }
    });
}
function postMessageData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const requestParam = { key: 1, title: "2", value: 3 };
            const data = yield (0, api_1.postData)(APIEndPoint.PostTest, requestParam);
            console.log(data);
        }
        catch (error) {
            console.error("데이터 가져오기 실패", error);
        }
    });
}
function OngoingEvents() {
    const [images, setImages] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchImageSources = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`http://localhost:4000/proxy?url=${encodeURIComponent("https://securities.koreainvestment.com/main/customer/notice/Event.jsp?gubun=i")}`);
                const text = yield response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/html");
                const images = doc.querySelectorAll(".event_img img");
                const imageSources = Array.from(images).map((img) => img.src);
                setImages(imageSources);
                console.log(imageSources);
            }
            catch (error) {
                console.error("이미지 경로를 가져오는 데 실패했습니다:", error);
            }
        });
        fetchImageSources();
        fetchData();
        postMessageData();
    }, []);
    return (react_1.default.createElement("div", { className: "events" }, images.map((event, index) => {
        const props = { id: index, imagePath: event };
        return react_1.default.createElement(EventCard_1.default, Object.assign({ key: index }, props));
    })));
}
exports.default = OngoingEvents;
