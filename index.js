const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Question = require("./database/Question")

//DB Connection
connection.authenticate()
            .then(() => {
                console.log("Database Connected")
            })
            .catch((err) => {
                console.log("Database connection ERROR: " + err )
            })


//EJS engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Rotes
app.get("/", (req,res) => {
    Question.findAll( {raw: true } ) //method to show all posts from table
    .then(questionslist => {
        res.render("index", {
            questions: questionslist
        })
    })  
})

app.get("/question", (req,res) => {
    res.render("question")
})

app.post("/savequestion", (req,res) => {
    let title = req.body.title
    let description = req.body.description
    Question.create({
        title: title,
        description: description
    }).then(() => {
        res.redirect("/")
    })
})



app.listen(5000, () => {
    console.log("http://localhost:5000")
})