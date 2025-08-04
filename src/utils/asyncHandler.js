// Utility to handle async errors in Express routes
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export { asyncHandler }; // Fixed export name

/*

const asyncHandler=(fn)=>async(req,res,next)=>{

    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(error.code||500).json({
            success:false,
            message:error.message

        })
        
    }
}
    */