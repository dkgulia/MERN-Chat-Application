import jwt from "jsonwebtoken";

const isAuthentication = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "User is not authenticated" });
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log(decode)
        if (!decode) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default isAuthentication;
