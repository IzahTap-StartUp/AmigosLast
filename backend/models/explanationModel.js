const mongoose = require("mongoose");

const ExplanationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: false },
    description: { type: String, required: false },
    image: { type: String, required: false },
    editionYear: { type: String, required: false },
    topics: [{
      _id: { type: mongoose.Schema.Types.ObjectId, required: true},
      title: { type: String, required: true },
      sectionCount: { type: String, required: true },
      sections: [
        {
          _id: { type: mongoose.Schema.Types.ObjectId, required: true},
          title: { type: String, required: true },
          sectionCount: { type: String, required: true },
          questions: [
            {
              _id: { type: mongoose.Schema.Types.ObjectId, required: true}, 
              title: { type: String, required: true },
              description: { type: String, required: true },
              answer: { type: String, required: true },
              image: { type: String, required: true },
              reviews: [
                {
                  tip: { type: String, required: true },
                  message: { type: String, required: true },
                }
              ]
            },
          ],
        },
      ],
    }],
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Explanation", ExplanationSchema);