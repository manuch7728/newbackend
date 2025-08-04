import mongoose from "mongoose"; // Import mongoose to use it

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Connect to MongoDB using mongoose and your DB_NAME
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}\n`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;