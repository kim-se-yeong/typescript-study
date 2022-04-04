export const UserQueries = {
    GetUser: `SELECT * FROM user WHERE id = ?`,
    AddUser: `INSERT INTO user(id) VALUES(?)`
}