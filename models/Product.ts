import mongoose from "mongoose";
import { IProductModel } from "../constants/Interfaces";


const ProductSchema = new mongoose.Schema<IProductModel>({
	title: {
		type: String,
		required: [true, "Product Title is required!"],
		trim: true,
	},
	img: {
		type: String,
		required: [true, "Product Image is required!"],
	},
	price: {
		type: Number,
		required: [true, "Product Price is required!"],
	},
	company: {
		type: String,
		required: [true, "Company is required!"],
		trim: true,
    },
    info: {
        type: String,
        required: false,
        trim: true,
    },
    inCart: {
        type: Boolean,
        required: false,
        default: false,
    },
    count: {
        type: Number,
        required: false,
        default: 0,
    },
});

export default mongoose.models.Product ||
	mongoose.model<IProductModel>("Product", ProductSchema);