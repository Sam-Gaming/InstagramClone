import mongoose from "mongoose";

const mongouri = 'mongodb+srv://samgaming1004:eUNSoswCbxEzGG1V@cluster0.kt9o0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log('mongodb connected successfully.');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;

