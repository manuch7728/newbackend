import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new new Schema({
    videoFile:{
        type:String,  // cloudinary url
        required:true,
    },
    thumbnail:{
        tppe:String, //cloudinary url
        required:true
    },
description:{
    type:String,
    required:true
},

duration:{
    type:String,
    required:true
},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    String:Schema.Types.ObjectId,
    ref:"User"
}


},
{
timestamps:true

})

export const Video=mongoose.model("Video",VedioSchema)