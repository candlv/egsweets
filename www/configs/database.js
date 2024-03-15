"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
const client = new pg_1.Pool({
    database: config_1.ENV === 'prod' ? process.env.RDS_DATABASE : config_1.ENV === 'prod' ? config_1.PG_DATABASE : config_1.PG_DB_TEST,
    password: config_1.ENV === 'prod' ? process.env.RDS_PASSWORD : config_1.PG_PASSWORD,
    user: config_1.ENV === 'prod' ? process.env.RDS_USERNAME : config_1.PG_USERNAME,
    host: config_1.ENV === 'prod' ? process.env.RDS_HOSTNAME : config_1.PG_HOSTNAME,
    port: config_1.ENV === 'prod' ? Number(process.env.RDS_PORT) : Number(config_1.PG_PORT)
});
exports.default = client;
