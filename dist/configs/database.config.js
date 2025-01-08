import { connect } from 'mongoose';
export const dbConnect = async () => {
    try {
        await connect(process.env.MONGO_URI, {});
        console.log("Base de datos conectada con éxito");
    }
    catch (error) {
        console.error("Error al conectar a la base de datos:", error);
        throw error;
    }
};
