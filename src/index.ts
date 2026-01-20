import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser(){
    await client.users.create({
        data:{
            username: "Tanishq",
            password: "123123"
        }
    })
}

createUser();