import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({path: `${process.env.PWD}/utils/.env`});

const connection = { isConnected: 0/*disconnected*/ };

(async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.DB_URI || 'DB_CONNECTION_URI');

        connection.isConnected = db.connections[0].readyState;

        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
})();