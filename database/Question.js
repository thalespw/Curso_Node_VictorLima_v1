const { DataTypes } = require("sequelize")
const connection = require("./database")

//Create Table Structure

const Question = connection.define('question',{
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
             //force: false: Means that if table already exist, it will not be created again
Question.sync({force: false})


module.exports = Question