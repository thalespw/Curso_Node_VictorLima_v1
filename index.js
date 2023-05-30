const express = require("express")
const app = express()
const bodyParser = require("body-parser")


app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotes
app.get("/", (req,res) => {
    res.render("index")   
})

app.get("/question", (req,res) => {
    res.render("question")
})

app.post("/savequestion", (req,res) => {
    let title = req.body.title
    let description = req.body.description
    res.send("Title: " + title + " " + "Description: " + description)
})



app.listen(5000, () => {
    console.log("http://localhost:5000")
})