export interface User {
    id: string
    password: string
}

export const get = function(user: User) {
    return user;
}
// function add(name: string, age: number) {
//     return {
//         name, age
//     }
// }