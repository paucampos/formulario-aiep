import mongoose from "mongoose";

(async () => {

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected to", db.connection.name);
    } catch (error) {
        console.error(error);
    }
})()