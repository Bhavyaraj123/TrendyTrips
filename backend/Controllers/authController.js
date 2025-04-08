import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import cookie from "cookie-parser";
export const register = async (req, res) => {
  try {
    const { username, email, password, photo, role } = req.body;

    const saltRounds = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
    const user = new User({
      username,
      email,
      password:hashPassword,
      photo,
      role,
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: true,

      message: "something went wrong",
    });
  }
};
export const login = async (req, res) => {
  try {
    const{email,password}=req.body

    const userLogin = await User.findOne({email})
    if(!userLogin){
        return res.status(404).json({success:false,message:"user not found,please register first"})
    }

    const chekPass =await bcrypt.compare(password,userLogin.password)
    if(!chekPass){
        return res.status(401).json({success:false,message:"incorrect password"})
    }

    const { role, ...rest } = userLogin.toObject();
    const token = jwt.sign({id:userLogin._id, role:userLogin.role},process.env.JWT_SECRET_KEY ,{expiresIn:"15d"})
    res.cookie("token",token,{
      httpOnly: true,
  maxAge: 15 * 24 * 60 * 60 * 1000,
    }).status(200).json({data:{...rest},role,token});
  } catch (error) {
    res.status(401).json({success:false,message:"failed to login"})  }
};
