import { pool } from '../db/config';
import User from '../interface/user';
import { UserQueries } from '../services/user-queries';

async function add(user: User): Promise<void> {

    const connection = await pool.getConnection();
    try {
        await connection.query(UserQueries.AddUser, [user.id]);
    } catch (error) {
        throw error;
    }
}

async function find(id: String): Promise<User> {

    const connection = await pool.getConnection();
    let [res] = await connection.query<User[]>(UserQueries.GetUser, [id]);
    return res[0];
}

export default {
    add,
    find
}