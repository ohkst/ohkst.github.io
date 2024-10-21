"use strict";
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
exports.deleteData = exports.putData = exports.postData = exports.getData = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://jsonplaceholder.typicode.com";
const api = axios_1.default.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
// GET
function getData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.get(endpoint);
            return response.data;
        }
        catch (error) {
            console.error("GET 요청 실패", error);
            return error;
        }
    });
}
exports.getData = getData;
// POST
function postData(endpoint, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.post(endpoint, payload);
            return response.data;
        }
        catch (error) {
            console.error("POST 요청 실패", error);
            return error;
        }
    });
}
exports.postData = postData;
// PUT
function putData(endpoint, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.put(endpoint, payload);
            return response.data;
        }
        catch (error) {
            console.error("PUT 요청 실패", error);
            return error;
        }
    });
}
exports.putData = putData;
// DELETE
function deleteData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield api.delete(endpoint);
            return response.status === 204;
        }
        catch (error) {
            console.error("DELETE 요청 실패", error);
            return error;
        }
    });
}
exports.deleteData = deleteData;
