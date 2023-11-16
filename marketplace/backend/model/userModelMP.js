const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        allowNull: true
    },
    email: {
        type: String,
        required: true,
        allowNull: true
    },
    password: {
        type: String,
        required: true,
        allowNull: true
    },
    repeatPassword: {
        type: String,
        required: true,
        allowNull: true
    },

})

const UserModelMP = mongoose.model("UserModelMP", userSchema)

module.exports = UserModelMP