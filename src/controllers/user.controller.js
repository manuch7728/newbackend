import { asyncHandler } from "../utils/asyncHandler.js"; 

const registerUser = asyncHandler(async (req, res) => {
	
const { fullname } = req.body
console.log(fullname)
	
    res.status(200).json({
        message:"ram ram"
    })

    

});

export { registerUser };