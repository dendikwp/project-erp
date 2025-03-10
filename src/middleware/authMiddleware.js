const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/dotenv");

const authorize = (roles) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (!roles.includes(decoded.role)) return res.status(403).json({ error: "Forbidden" });

    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = { authorize };
