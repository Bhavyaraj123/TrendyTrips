import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required :true,
        unique:true,
    },
    email:{
        type:String,
        required :true,
    },
    password:{
        type:String,
        required :true,  
    },
    photo:{
        type:String,
    },
    role:{
        type:String,
    }

})

const User =mongoose.model("User",userSchema)

export default User;
