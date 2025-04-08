import User from '../models/userModel.js'


export const createUser = async (req, res) => {
    const newUser = new User(req.body);
  

    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            success: true,
            message: 'Successfully created the User',
            data: savedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later",
           
        });
    }
}; 


// for update
 export const updateUser=async(req,res)=>{
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id,{
            $set:req.body

        },{new:true});
        res.status(200).json({success:true,message:"successfully updated",data:updateUser})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }

// for delete
 export const deleteUser=async(req,res)=>{
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"successfully deleted"})

    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})

    }
 }

//  for get one User
 export const getUser=async(req,res)=>{
    const id = req.params.id
    try {
        const getUser = await User.findById(id);
        res.status(200).json({success:true,message:"successfully find the User",data:getUser})


    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }
 

//  for get all User 
 export const getAllUser=async(req,res)=>{

     try {
        const allUsers = await User.find({})
        res.status(200).json({success:true,message:"successfully get all Users",data:allUsers})
    } catch (error) {
        res.status(500).json({success:false,message:"something went wrong ,try again"})
    }
 }

