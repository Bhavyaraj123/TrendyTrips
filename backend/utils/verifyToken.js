import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next, callback) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    req.user = user;

    if (callback) {
      callback();
    } else {
      next();
    }
  });
};



export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.role==='admin'){
            next()
        }
        else{
        return    res.status(401).json({
                success: false,
                message: "you are not authorized",
              });

        }
    })
}


export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if( req.user.role==='admin'){
            next()
        }
        else{
            res.status(401).json({
                success: false,
                message: "you are not authorized",
              });

        }
    })
}