import User from '../interface/user';
import { UserQueries } from '../services/user-queries';
import { execute } from '../db/config';

async function add(user: User): Promise<void> {
    // return execute<User[]>(UserQueries.AddUser, []);
}

async function find(id: String): Promise<User> {
    return execute<User>(UserQueries.GetUser, [id]);
}

export default {
    add,
    find
}