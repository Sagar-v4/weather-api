import mongoose from 'mongoose';
require('dotenv').config()
mongoose.set('strictQuery', false);

// Closing MongoDB Connection
const close = async () => {
    try {
        await mongoose.connection.close()
    } catch (err) {
        throw err;
    }
};

// Closing MongoDB Console message
mongoose.connection.on("disconnected", () => {
    console.log('[-] MongoDB disconnected!');
})

export default close;