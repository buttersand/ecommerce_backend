/**
 * Connects to MongoDB using the provided URI.
 * 
 * WHY?
 * - Allows microservices to connect to their respective MongoDB databases.
 * - Centralizes database connection logic in `ecommerce-common`.
 * 
 * WHAT IF WE DIDN’T USE THIS?
 * - Each service would need to manually implement its own MongoDB connection logic.
 * - More duplication and harder to maintain.
 */
import mongoose from "mongoose";

const connectDB = async (mongoUri: string) => {
    try {
        await mongoose.connect(mongoUri,{
                useNewUrlParser: true,    // Helps avoid deprecation warnings
                useUnifiedTopology: true, // Ensures stable connections
            } as any); 
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export { connectDB };
