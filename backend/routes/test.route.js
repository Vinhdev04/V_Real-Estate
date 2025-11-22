import express from "express"
const router = express.Router();
import { requireLogin,requireLogout,requireAdmin } from "../controllers/test.controller.js";

router.get("/require-login",requireLogin);
router.get("/require-logout",requireLogout);
router.get("/require-admin",requireAdmin);
export default router;