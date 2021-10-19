import { NextApiRequest, NextApiResponse } from "next";
import "@utils/dbConnect";
import { ISignIn } from "@constants/Interfaces";
import User from "@models/User";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password }: ISignIn = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) res.status(404).json({ message: 'User doesn\'t exist' })
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({
            success: false,
            message: 'Invalide Credentials'
        })
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
        res.status(200).json({
            success: true,
            result: existingUser, token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}
