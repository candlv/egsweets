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
const bcrypt_1 = require("bcrypt");
const database_1 = __importDefault(require("../configs/database"));
const config_1 = require("../configs/config");
class User {
    //add new user
    register(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return database_1.default.connect().then((db) => __awaiter(this, void 0, void 0, function* () {
                    const rows = (yield db.query(`INSERT INTO users(username, firstname, lastname, password) VALUES($1, $2, $3, $4)
                            RETURNING username, firstname, lastname`, [
                        u.username,
                        u.firstname,
                        u.lastname,
                        (0, bcrypt_1.hashSync)(u.password + config_1.SECRET, parseInt(config_1.SALT)),
                    ])).rows[0];
                    db.release();
                    return rows;
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    //get list of users
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return database_1.default.connect().then((db) => __awaiter(this, void 0, void 0, function* () {
                    const rows = (yield db.query(`SELECT id, username, firstname, lastname, password FROM users`)).rows;
                    db.release();
                    return rows;
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = User;
