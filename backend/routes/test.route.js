/* ==============================
     ROUTE: TEST
 ============================== */
import express from "express"
const router = express.Router();
import { requireLogin,requireLogout,requireAdmin } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

router.get("/require-login",verifyToken,requireLogin);
router.get("/require-logout",requireLogout);
router.get("/require-admin",requireAdmin);
export default router;