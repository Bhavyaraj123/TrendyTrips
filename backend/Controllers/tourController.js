
import Tour from "../models/tourSchema.js";

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
  

    try {
        const savedtour = await newTour.save();
        res.status(200).json({
            success: true,
            message: 'Successfully created the tour',
            data: savedtour
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
           
        }); 
    }
};


// for update
 export const updateTour=async(req,res)=>{
    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set:req.body

        },{new:true});
        res.status(200).json({success:true,message:"successfully updated",data:updateTour})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }

// for delete
 export const deleteTour=async(req,res)=>{
    const id = req.params.id
    try {
        const deleteTour = await Tour.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"successfully deleted"})

    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})

    }
 }

//  for get one tour
export const getTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate("reviews");
        if (!tour) {
            return res.status(404).json({ success: false, message: "Tour not found" });
        }
        res.status(200).json({ success: true, message: "Successfully found the tour", data: tour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Something went wrong, try again" });
    }
};


//  for get all tour 
 export const getAllTour=async(req,res)=>{
    const pages = parseInt(req.query.pages)
     try {
        const allTours = await Tour.find({}).populate("reviews").skip(pages*8).limit(8)
        res.status(200).json({success:true,message:"successfully get all tours",data:allTours,count:allTours.length})
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }

//  for getting result by searchbar 

export const getTourBysearch = async(req,res)=>{
    
    const name = new RegExp(req.query.name , 'i')
    const distance = parseInt(req.query.distance)
       
    
    try {
     
        const tours = await Tour.find({name,distance:{$gte:distance}}).populate("reviews");
        res.status(200).json({success:true,message:"successfully get the place by search ",data:tours})

    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
}

// show all feature tours 
export const featureTous = async(req,res)=>{
    try {
        const tours= await Tour.find({featured:true}).populate("reviews").limit(8)
        res.status(200).json({success:true,message:"successfully fetch the featured tours ",data:tours})

    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
}

export const tourCounts  = async (req,res)=>{
    try {
    const tours = await Tour.estimatedDocumentCount()
    res.status(200).json({success:true,data:tours})

        
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})

    }
}