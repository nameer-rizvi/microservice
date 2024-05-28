const express = require("express");
const router = express.Router();
const documentRoute = require("./document");
const healthRoute = require("./health");

router.post("/document", documentRoute.post);
router.get("/document/:id", documentRoute.get);
router.delete("/document/:id", documentRoute.delete);
router.get("/health", healthRoute.get);

module.exports = router;
