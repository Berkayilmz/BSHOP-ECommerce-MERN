import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Database: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Database connection error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;