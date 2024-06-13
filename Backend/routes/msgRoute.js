import express from "express"
import { sendMessage } from "../controller/msgController.js";
import isAuthentication from "../middleware/isAuth.js";

const router = express.Router();
 router.route('/send/:id').post(isAuthentication,sendMessage)

 export default router;