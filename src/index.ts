import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function findSpecificDataOfUser(){
    const response = await client.users.findFirst({
        where:{
            id : 2
        },
        select:{
            username : true
        }
    })

    console.log(response)
}

findSpecificDataOfUser()