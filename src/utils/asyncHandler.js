const asyncHandler = (fn)=>{
    return async (req, res,next) => {
        try{
            await fn(req,res,next)
        }catch(error){
            next(error)
        }
    }
}

const errorHandler = (err,req,res,next) => {
    console.log(err);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Server Error",
    })
}

module.exports = {
    asyncHandler,
    errorHandler,
}