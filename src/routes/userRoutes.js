const express = require("express");
const { getUserDashboard } = require("../controllers/userController");
const { authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authorize(["USER"]), getUserDashboard);

module.exports = router;
