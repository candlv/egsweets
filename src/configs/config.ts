import dotenv from 'dotenv'

dotenv.config();

export const {
    ENV,
    SALT,
    SECRET,
    PG_DB_TEST,
    PG_DATABASE,
    PG_USERNAME,
    PG_PASSWORD,
    PG_HOSTNAME,
    PG_PORT
} = process.env;


