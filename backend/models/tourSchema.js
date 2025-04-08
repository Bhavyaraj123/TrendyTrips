import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    distance:{
        required:true,
        type:Number,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:"Review",
    }],
    rating:{
        type:Number,
        required:true,
    },
    featured:{
        type:Boolean,
        default:false,

    },
},
{timestamps:true}

);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
