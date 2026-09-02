let users = []
function addUser() {
    let name = prompt("Enter user name:")
let id = Number(prompt("Enter user ID:"))
let balance = Number(prompt("Enter balance:"))

console.log(name)
console.log(id)
console.log(balance)
let user = {
    name : name , 
    id : id ,
    balance : balance
}
    users.push(user)
    console.log(users)
}
addUser()
addUser()
addUser()




addUser= [
    {
        name: "vivian",
        id: 202300636,
         balance:2000,

    },
    {
        name: "rehame",
        id:202300637,
        balance:4000,

    },
    {
        name: "nancy",
        id:202300637,
          balance:5000,

    }
]

function editUserBalanceByID(id, newBalance) {
    let name = prompt("Enter user name:")
let id = Number(prompt("Enter user ID:"))
let balance = Number(prompt("Enter balance:"))

console.log(name)
console.log(id)
console.log(balance)


    let user = users.find(function (user) {
        return user.id == id;
    });
    

    if (user) {
        user.balance = newBalance;
    } else {
        console.log("User not found");
    }
}



