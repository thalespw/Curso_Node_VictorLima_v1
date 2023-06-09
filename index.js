const express = require("express")
const app = express()



app.get("/", (req,res)=>{
    res.send("Bem vindo!!!")
})

app.get("/user/:name", (req,res)=>{
    let username = req.params.name
    res.send(`Seja bem vindo ${username}`)
})

app.listen(5000, (err)=>{
    if(err){
        console.log("Error to init the server: " + err)
    } else {
        console.log('Server online: http://localhost:5000')
    }
})