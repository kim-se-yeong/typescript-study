interface User {
    name: string
    age: number
}
// declare var user: User

// let user: User;

const get = function(name: string, age:number) {
    return {name, age};
}
// function add(name: string, age: number) {
//     return {
//         name, age
//     }
// }

export default get;