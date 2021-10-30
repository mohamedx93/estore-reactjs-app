import NextAuth from "next-auth";
import AppleProvider from "next-auth/dist/providers/apple";
import FacebookProvider from "next-auth/dist/providers/facebook";
import GoogleProvider from "next-auth/dist/providers/google";
import TwitterProvider from "next-auth/dist/providers/twitter";
import dot from 'dotenv'

export default NextAuth({
    providers: [
        AppleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        TwitterProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})