import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'

const connectDB = async () =>{
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log('MongoDB Connection Successful');
} catch (error) {
    console.log('MongoDB Connection Error',error);
    process.exit(1)
}
}


export default connectDB