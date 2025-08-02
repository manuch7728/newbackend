import {v2 as cloudinary} from "cloudinary"

    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
        api_key:process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });  

try {
    if(!localFilePath) return null
const response =await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
    })
    console.log("file is uploaded on cloudinary",response.url);
    return response;
}

catch (error) {
    fs.unlinkSync(localFile.Path)
    return null;
    
}

export{uploadOncloudinary}