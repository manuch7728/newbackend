import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true

        },

        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required:true,
        },

        coverImage:{
            type:String,

        },

        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                rsf:"vedio"
                
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']
        },
        refresfTOken:{
            type:String
        }
},
{
    timestamps:true
}
)


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})
userSchema.methods.isPasswordCorrect = async function(password) {
return await bcrypt.compare(password, this.password);
}

userSchema.method.generateAccessToken=function(){
return jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullName:this.fulllname
    },
    process.env.ACCESS_TOKEN.SCRIPT,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
}
userSchema.method.generateRefreshToken=function(){
    return jwt.sign({
        _id:this.id,
        
    },
    process.env.REFRESH_TOKEN.SCRIPT,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}


export const User=mongoose.model("User",userSchema)