import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
           
        },
        userEmail: {
            type: String,
            
        },
        fullname: {
            type: String,
            required: true,
        },
        number:{
            type:Number,
            required:true,

        },
        guestSize:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            // required:true,
        },
        tourName:{
            type:String,
            required:true,

        }


    },
    { timestamps: true } 
); 

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;