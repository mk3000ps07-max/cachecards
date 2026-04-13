const cardModel = require("../models/cardModel");
const { asyncHandler } = require("../utils/asyncHandler");

exports.createCard = asyncHandler(async (req, res) => {
    const { question, answer } = req.body;
    
    if (!question || !answer) {
       return res.status(400).json({
            success:false,
            message: "Question and answer required"
        })
    }

    const card = await cardModel.create({
        question,
        answer,
    })

    res.status(201).json({
        success:true,
        data:card
    })
    })

exports.getCards = asyncHandler(async (req, res) => {
    const cards = await cardModel.find();

    res.status(200).json({
        success: true,
        count: cards.length,
        data: cards
    });
});
    exports.getCardById = asyncHandler(async (req, res) => {
  const card = await cardModel.findById(req.params.id);

  if (!card) {
    return res.status(404).json({
      success: false,
      message: "Card not found",
    });
  }

  res.json({
    success: true,
    data: card,
  })
})


exports.updateCard = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;

  const card = await cardModel.findByIdAndUpdate(
    req.params.id,
    { question, answer },
    { new: true }
  )

  if (!card) {
    return res.status(404).json({
      success: false,
      message: "Card not found",
    })
  }

  res.json({
    success: true,
    data: card,
  })
})


exports.deleteCard = asyncHandler(async (req, res) => {
  const card = await cardModel.findByIdAndDelete(req.params.id);

  if (!card) {
    return res.status(404).json({
      success: false,
      message: "Card not found",
    })
  }

  res.json({
    success: true,
    message: "Card deleted",
  })
})