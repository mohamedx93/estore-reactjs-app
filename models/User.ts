import mongoose from "mongoose";
import { IUserModel } from "../constants/Interfaces";


const UserSchema = new mongoose.Schema<IUserModel>({
    userName: {
        type: String,
        required: [true, "UserName is required!"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
    email: {
        type: String,
        required: [true, "UserName is required!"],
        trim: true,
    },
    avatar: String,
    
});

export default mongoose.models.User ||
    mongoose.model<IUserModel>("User", UserSchema);