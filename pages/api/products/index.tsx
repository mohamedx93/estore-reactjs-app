import Product from "@models/Product";
import { NextApiRequest, NextApiResponse } from "next";
import "@utils/dbConnect";

export default async(req:NextApiRequest, res:NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const products = await Product.find({}).limit(20);
                return res.status(200).json({
                    success: true,
                    data: products,
                });
            } catch (error) {
                return res.status(400).json({
                    success: false,
                });
            }
        // case "POST":
        //     try {
        //         const employees = await Employee.create(req.body);
        //         return res.status(201).json({
        //             success: true,
        //             data: employees,
        //         });
        //     } catch (error) {
        //         return res.status(400).json({
        //             success: false,
        //         });
        //     }
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            return res
                .status(405)
                .json({ success: false, data: `Method ${method} Not Allowed`});
    }
};
