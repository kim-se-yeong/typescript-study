import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
    id: String,
    address: String
}

export default User;