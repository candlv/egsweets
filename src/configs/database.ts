import { Pool } from "pg";
import {
  ENV,
  PG_DB_TEST,
  PG_DATABASE,
  PG_USERNAME,
  PG_PASSWORD,
  PG_HOSTNAME,
  PG_PORT} from "./config";


const client = new Pool({
  database: ENV === 'prod' ? process.env.RDS_DATABASE : ENV === 'prod' ? PG_DATABASE : PG_DB_TEST,
  password: ENV === 'prod' ? process.env.RDS_PASSWORD : PG_PASSWORD,
  user: ENV === 'prod' ? process.env.RDS_USERNAME : PG_USERNAME,
  host: ENV === 'prod' ? process.env.RDS_HOSTNAME : PG_HOSTNAME,
  port: ENV === 'prod' ? Number(process.env.RDS_PORT) : Number(PG_PORT )  
})

export default client
