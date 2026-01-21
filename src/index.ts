import { PrismaClient } from "@prisma/client";
import express from "express";


const app = express();
app.use(express.json());
const client = new PrismaClient();



app.post("/signup", async (req, res) => {
    const {username, password} = req.body;

    try{
        await client.users.create({
            data:{
                username : username,
                password : password
            }
        })

        res.json({
            message : "Singup successfully"
        })
    }catch(e){
        console.log("some error occured in signin endpoint");
    }
})

app.get("/users", async (req, res) => {
    const allUsers = await client.users.findMany();
    res.json({
        allUsers
    })
})

app.get("/users/:id", async (req, res) => {
    const id = Number(req.params.id)
    const users = await client.users.findFirst({
        where : {
            id : id
        }, select : {
            todos : true,
            username : true,
            password : true
        }
    })

    res.json({
        users : users,
        id : users?.todos[0]?.userId
    })
})




app.listen(3000)