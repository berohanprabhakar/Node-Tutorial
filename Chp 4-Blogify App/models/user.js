const {Schema , model, default: mongoose} = require("mongoose");

const userSchema = new Schema(
    {
        fullname: {
            type:String,
            required: true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        profileImgUrl:{
            type:String,
            default: "/public/userprofile.png",

        },
        role:{
            type:String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        },
    },
);

    const User = model("user", userSchema);

    module.exports = User;