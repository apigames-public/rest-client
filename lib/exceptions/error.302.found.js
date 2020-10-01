"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_exception_1 = __importDefault(require("./base.exception"));
class Error302Found extends base_exception_1.default {
    constructor(response) {
        super(response);
        this.name = 'Error302Found';
    }
}
exports.default = Error302Found;