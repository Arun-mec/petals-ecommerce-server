const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required :true
    },
    email: {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required :true
    },
    number : {
        type : Number,
        required :true
    },
    isAdmin : {
        type : Boolean,
        required :true,
        default : false
    },
    isActive : {
        type : Boolean,
        required :true,
        default : true
    },
},{
    timestamps : true
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model('User', userSchema);