import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        if (!process.env.MONGO_URI) throw new Error('MONGO_URI not defined');
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada con éxito");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
};