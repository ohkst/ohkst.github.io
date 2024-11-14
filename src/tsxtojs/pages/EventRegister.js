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
const Checkbox_1 = __importDefault(require("../components/Checkbox"));
const react_pdf_1 = require("react-pdf");
require("../styles/EventRegister.css");
const domestic_ms_event_2301_pdf_1 = __importDefault(require("../domestic_ms_event_2301.pdf"));
function EventRegister() {
    const [isAgreeChecked, setIsAgreeChecked] = (0, react_1.useState)(false);
    const [isPdfModalOpen, setIsPdfModalOpen] = (0, react_1.useState)(false);
    const handleAgreeCheckboxChange = () => {
        setIsAgreeChecked(!isAgreeChecked);
        setIsPdfModalOpen(!isPdfModalOpen); // PDF 모달 토글
    };
    const handleJoinClick = () => {
        if (!isAgreeChecked) {
            alert('이벤트 규정 확인 후 이벤트 신청이 가능합니다.');
            return;
        }
        alert('이벤트 신청이 완료되었습니다.');
        // 이벤트 신청 로직 (추후 구현)
        console.log('이벤트 신청');
    };
    react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${react_pdf_1.pdfjs.version}/build/pdf.worker.min.mjs`;
    const handlePdfClick = () => {
        window.open(domestic_ms_event_2301_pdf_1.default, '_blank');
        setIsAgreeChecked(true);
        setIsPdfModalOpen(true); // PDF 모달 토글
    };
    const [isPdfLoaded, setIsPdfLoaded] = (0, react_1.useState)(false);
    const [pdfLoadingError, setPdfLoadingError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const loadPdf = () => __awaiter(this, void 0, void 0, function* () {
            if (isPdfModalOpen) {
                try {
                    // PDF 파일 로딩
                    window.open(domestic_ms_event_2301_pdf_1.default, '_blank');
                    setIsPdfLoaded(true);
                }
                catch (error) {
                    console.error('PDF 로딩 실패:', error);
                    setPdfLoadingError(true);
                }
            }
        });
        loadPdf();
    }, [isPdfModalOpen]);
    return (react_1.default.createElement("div", { id: "joinPage" },
        react_1.default.createElement("div", null,
            react_1.default.createElement(Checkbox_1.default, { checked: isAgreeChecked, onChange: handleAgreeCheckboxChange, iconOn: "../ic_checkbox_24_enable_ON.svg", iconOff: "../ic_checkbox_24_enable_OFF.svg", label: "\uC6B4\uC601\uADDC\uC815 \uBC0F \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC548\uB0B4", labelClass: "labelInfo" })),
        react_1.default.createElement("div", { id: "divLine01" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement(Checkbox_1.default, { checked: isAgreeChecked, onChange: handleAgreeCheckboxChange, iconOn: "../ic_checkbox_20_bg_white_enable_ON.svg", iconOff: "../ic_checkbox_20_bg_white_enable_OFF.svg", label: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\u30FB\uC774\uC6A9\u30FB\uC81C\uACF5\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.", labelClass: "labelAgree" }),
            react_1.default.createElement("button", { id: "infoPdf", onClick: handlePdfClick }, isPdfModalOpen ? '확인완료' : '규정확인'),
            isPdfModalOpen && (react_1.default.createElement("div", { className: "modal" }, pdfLoadingError && react_1.default.createElement("div", null, "PDF \uB85C\uB529\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."))),
            react_1.default.createElement("a", { href: "/domestic_ms_event_2301.pdf", target: '_blank' })),
        react_1.default.createElement("div", { id: "divLine02" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { className: "btn Search" }, "\uB300\uC0C1\uC5EC\uBD80 \uC870\uD68C\uD558\uAE30")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { className: "btn Join", onClick: handleJoinClick }, "\uC774\uBCA4\uD2B8 \uC2E0\uCCAD\uD558\uAE30"))));
}
exports.default = EventRegister;
