"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PG_PORT = exports.PG_HOSTNAME = exports.PG_PASSWORD = exports.PG_USERNAME = exports.PG_DATABASE = exports.PG_DB_TEST = exports.SECRET = exports.SALT = exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
_a = process.env, exports.ENV = _a.ENV, exports.SALT = _a.SALT, exports.SECRET = _a.SECRET, exports.PG_DB_TEST = _a.PG_DB_TEST, exports.PG_DATABASE = _a.PG_DATABASE, exports.PG_USERNAME = _a.PG_USERNAME, exports.PG_PASSWORD = _a.PG_PASSWORD, exports.PG_HOSTNAME = _a.PG_HOSTNAME, exports.PG_PORT = _a.PG_PORT;
