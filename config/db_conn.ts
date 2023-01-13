import mongoose from 'mongoose';
require('dotenv').config()
mongoose.set('strictQuery', false);

// Connecting MongoDB
const conn = async () => {
    try {
        const mongodb_uri: string | undefined = process.env.MONGODB_URI
        if (mongodb_uri != null) {
            await mongoose.connect(mongodb_uri)
                .catch((err) => {throw err;})
        } else {
            throw new Error(`[-] MongoDB URI Undefined`)
        }
    } catch (err) {
        throw err;
    }
};

// MongoDB Connection Console Message
mongoose.connection.on("connected", () => {
    console.log('[+] MongoDB connected!');
})

export default conn;