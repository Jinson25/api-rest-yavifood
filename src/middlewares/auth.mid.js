import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { HTTP_UNAUTHORIZED } from "../constants/http_status.js";

export default (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET);
        req.user = decodedUser;
    } catch (error) {
        console.log("algo anda mal")
        return res.status(HTTP_UNAUTHORIZED).send("Token inválido o expirado");
    }

    return next();
};