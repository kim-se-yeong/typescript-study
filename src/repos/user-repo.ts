import { pool } from '../db/config';
import User from '../interface/user';

async function add(user: User): Promise<void> {
    const connection = await pool.getConnection();
    const query = `INSERT INTO user(id) VALUES(${user.id})`;

    try {
        await connection.query(query);
    } catch (error) {
        console.log(error);
    }
}

export default {
    add
}