import express from "express";
import { getOtherUsers, login, logout, register } from "../controller/userController.js";
import isAuthentication from "../middleware/isAuth.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthentication,getOtherUsers);


export default router;