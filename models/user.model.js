import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    order: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
})

export const User = mongoose.model("User", UserSchema)