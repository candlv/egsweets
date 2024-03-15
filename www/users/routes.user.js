"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handler_user_1 = require("./handler.user");
const userRoutes = (0, express_1.Router)();
userRoutes
    .post("/users", handler_user_1.create)
    .get("/users", handler_user_1.index);
exports.default = userRoutes;
