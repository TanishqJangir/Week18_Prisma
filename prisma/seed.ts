import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUser() {
    await client.users.create({
        data: {
            username: "TanishqJangir",
            password: "123123123",
            todos: {
                create: {
                    title: "Go to college",
                    description: "at sharp 10 am",
                    done: false,
                }
            }
        }
    })

    // const response = await client.users.findFirst({
    //     where : {
    //         username : "TanishqJangir"
    //     }
    // })

    // const id = Number(response?.id);

    // await client.todos.create({
    //     data : {
    //         title : "Go to college",
    //         description : "at sharp 10 am",
    //         done : false,
    //         userId : id
    //     }
    // })

    console.log("Dummy data inserted")
}

createDummyUser();