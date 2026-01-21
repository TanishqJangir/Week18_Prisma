import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUser() {
    await client.users.create({
        data: {
            username: "John",
            password: "123123123",
            todos: {
                create: {
                    title: "Go to office",
                    description: "123123",
                    done: false,
                }
            }
        }
    })

    console.log("Dummy data inserted")
}

createDummyUser();