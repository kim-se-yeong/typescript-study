import User from '../interface/user';
import repo from '../repos/user-repo';

function add(user: User): Promise<void> {
    return repo.add(user);
}

export default {
    add
}