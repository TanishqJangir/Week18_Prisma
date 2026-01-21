import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


// Create a user
async function createUser(){
    await client.users.create({
       data:{
        username: "Tanishq Jangir",
        password : "123123"
       }
    })
}

createUser();


// Delete a user

async function deleteUser(){
    await client.users.delete({
        where:{
            id:1
        }
    })
}

deleteUser();

//Upadate in db

async function updateUser() {
    await client.users.update({
        where:{
            id: 1
        },
        data:{
            username : "Tan$hq",
            password : "123123123"
        }
    })
}
updateUser();

//TO get the data

async function findUser(){
    const response = await client.users.findFirst({
        where:{
            id : 1
        }
    })
    console.log(response)
}

//TO get the specific data

async function findSpecificDataOfUser(){
    const response = await client.users.findFirst({
        where:{
            id : 1
        },
        select:{
            username : true
        }
    })

    console.log(response)
}

findSpecificDataOfUser()