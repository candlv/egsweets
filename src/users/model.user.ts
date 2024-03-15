import { hashSync } from "bcrypt";
import client from "../configs/database";
import Person from "./type.user";
import {
    SECRET,
    SALT
} from "../configs/config";



class User {
    //add new user
    async register(u: Person): Promise<Person> {
        try {
            return client.connect().then(async (db) => {
                const rows = (
                    await db.query(
                        `INSERT INTO users(username, firstname, lastname, password) VALUES($1, $2, $3, $4)
                            RETURNING username, firstname, lastname`,
                        [
                            u.username,
                            u.firstname,
                            u.lastname,
                            hashSync(u.password + SECRET, parseInt(SALT as string)),
                        ]
                    )
                ).rows[0];
                db.release();
                return rows;
            });
        } catch (error) {
            throw error;
        }
    }

    //get list of users
    async getUsers(): Promise<Person[]> {
        try {
            return client.connect().then(async (db) => {
                const rows = (
                    await db.query(`SELECT id, username, firstname, lastname, password FROM users`)
                ).rows;
                db.release();
                return rows;
            });
        } catch (error) {
            throw error;
        }
    }
}

export default User;
