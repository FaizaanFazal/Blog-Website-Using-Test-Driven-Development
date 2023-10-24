import { getToken, login, logout, register } from "@/controllers/authController";
import Router from "express-promise-router";

const router = Router();

router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post("/token",getToken);

export default router