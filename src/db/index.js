import mongoose from "mongoose"; // Import mongoose to use it

const connectDB = async () => {
    try {
        // Connect to MongoDB using mongoose and your DB_NAME
        console.log(process.env.DBurl)
        const connectionInstance = await mongoose.connect(process.env.DBurl);

        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}\n chl gya`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;