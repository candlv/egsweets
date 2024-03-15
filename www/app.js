"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_index_1 = __importDefault(require("./api/routes.index"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
exports.port = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use((0, express_fileupload_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(routes_index_1.default);
app.listen(exports.port, () => {
    console.log(`Navigate to -> localhost:${exports.port} on your browser`);
});
exports.default = app;
