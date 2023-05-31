const Sequelize = requeire("sequelize")
const connection = require("./database")

//Create Table Structure

const Question = connection.define('question',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
             //force: false: Means that if table already exist, it will not be created again
Question.sync({force: false}).then(() => {})