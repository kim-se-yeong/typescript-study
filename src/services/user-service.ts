import User from '../interface/user';
import repo from '../repos/user-repo';

function add(user: User): Promise<void> {
    return repo.add(user);
}

function find(id: String): Promise<User> {
    return repo.find(id);
}

export default {
    add,
    find
}