const express = require("express");
const router = express.Router();

const {
  createCard,
  getCards,
  getCardById,
  updateCard,
  deleteCard,
} = require("../controllers/cardController");

// ✅ CREATE
router.post("/", createCard);

// ✅ GET ALL
router.get("/", getCards);

// ✅ GET ONE
router.get("/:id", getCardById);

// ✅ UPDATE
router.put("/:id", updateCard);

// ✅ DELETE
router.delete("/:id", deleteCard);

module.exports = router;