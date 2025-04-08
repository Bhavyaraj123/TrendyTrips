import Booking from  "../models/BookingShcema.js"


export const  bookingRoute=async(req,res)=>{
    const bookings = new Booking(req.body)
try {
    const saveBooking = await bookings.save();
    res.status(200).json({
        success:true,
        message:"Booked tour successfully",
        data:saveBooking
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"something is wrong , please try agian"
    })
}
}

// get single booking
export const  getBooking=async(req,res)=>{
    const id = req.params.id
   
try {
const find = await Booking.findById(id);
    res.status(200).json({
        success:true,
        message:"successful",
        data:find
    })
} catch (error) {
    res.status(404).json({
        success:false,
        message:"not found"
    })
}
}

// get all booking 
export const  getAllBooking=async(req,res)=>{
  
   
try {
const find = await Booking.find();
    res.status(200).json({
        success:true,
        message:"all booking",
        data:find
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Internal server error "
    })
}
}