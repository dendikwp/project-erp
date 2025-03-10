const express = require("express");
const { getAdminDashboard } = require("../controllers/adminController");
const { authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authorize(["ADMIN"]), getAdminDashboard);

module.exports = router;
