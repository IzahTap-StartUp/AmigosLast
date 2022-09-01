const express  = require("express");
const expressAsyncHandler = require("express-async-handler");
const Explanation = require("../models/explanationModel.js");

const explanationRouter = express.Router();

explanationRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const explanations = await Explanation.find();
    res.send({ explanations });
  })
);

explanationRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      res.send(explanation);
    } else {
      res
        .status(404)
        .send({ message: "There is no explanation like that" });
    }
  })
);

explanationRouter.get(
  "/:id/topics",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      res.send(explanation.topics);
    } else {
      res.status(404).send({ message: "There is no topics like that" });
    }
  })
);

explanationRouter.get(
  "/:id/topics/:topicId",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      const topic = explanation.topics.id(req.params.topicId);
      if (topic) {
        res.send(topic);
      } else {
        res.status(404).send({ message: "There is no topic like that" });
      }
    } else {
      res
        .status(404)
        .send({ message: "There is no explanation like that" });
    }
  })
);

// Get topics'sections
explanationRouter.get(
  "/:id/topics/:topicId/sections",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      const topic = explanation.topics.find(
        (topic) => topic._id.toString() === req.params.topicId
      );
      if (topic) {
        res.send(topic.sections);
      } else {
        res.status(404).send({ message: "Section Not Found" });
      }
    } else {
      res.status(404).send({ message: "Explanation Not Found" });
    }
  })
);


// Get topics'sections'questions
explanationRouter.get(
  "/:id/topics/:topicId/sections/:sectionId/questions",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      const topic = explanation.topics.find(
        (topic) => topic._id.toString() === req.params.topicId
      );
      if (topic) {
        const section = topic.sections.find(
          (section) => section._id.toString() === req.params.sectionId
        );
        if (section) {
          res.send(section.questions);
        } else {
          res.status(404).send({ message: "Section Not Found" });
        }
      } else {
        res.status(404).send({ message: "Topic Not Found" });
      }
    } else {
      res.status(404).send({ message: "Explanation Not Found" });
    }
  })
);




// get questions's detail
explanationRouter.get(
  "/:id/topics/:topicId/sections/:sectionId/questions/:questionId",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      const topic = explanation.topics.find(
        (topic) => topic._id.toString() === req.params.topicId
      );
      if (topic) {
        const section = topic.sections.find(
          (section) => section._id.toString() === req.params.sectionId
        );
        if (section) {
          const question = section.questions.find(
            (question) => question._id.toString() === req.params.questionId
          );
          if (question) {
            res.send(question);
          } else {
            res.status(404).send({ message: "Question Not Found" });
          }
        } else {
          res.status(404).send({ message: "Section Not Found" });
        }
      } else {
        res.status(404).send({ message: "Topic Not Found" });
      }
    } else {
      res.status(404).send({ message: "Explanation Not Found" });
    }
  })
);

// Post question review api

explanationRouter.post(
  "/:id/topics/:topicId/sections/:sectionId/questions/:questionId/reviews",
  expressAsyncHandler(async (req, res) => {
    const explanation = await Explanation.findById(req.params.id);
    if (explanation) {
      const topic = explanation.topics.find(
        (topic) => topic._id.toString() === req.params.topicId
      );
      if (topic) {
        const section = topic.sections.find(
          (section) => section._id.toString() === req.params.sectionId
        );
        if (section) {
          const question = section.questions.find(
            (question) => question._id.toString() === req.params.questionId
          );
          if (question) {
            const review = {
              tip: req.body.tip,
              message: req.body.message,
            };
            question.reviews.push(review);
            const updatedExplanation = await explanation.save();
            res
              .status(201)
              .send({
                message: "Review Created",
                review:
                  updatedExplanation.reviews[
                    updatedExplanation.reviews.length - 1
                  ],
              });
          } else {
            res.status(404).send({ message: "Question Not Found" });
          }
        } else {
          res.status(404).send({ message: "Section Not Found" });
        }
      } else {
        res.status(404).send({ message: "Topic Not Found" });
      }
    } else {
      res.status(404).send({ message: "Explanation Not Found" });
    }
  })
);

// explanationRouter.post(
//   "/",
//   expressAsyncHandler(async (req, res) => {
//     const explanation = new Explanation({
//       title: "IZAHTAP explanation" + Date.now(),
//       author: "ADMIN" + Date.now(),
//       category: "MARKETING",
//       description:
//         "IZAHTAP There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
//     });
//     const createdExplanation = await explanation.save();
//     ``;
//     res.send({
//       message: "Explanation Created",
//       explanation: createdExplanation,
//     });
//   })
// );

// explanationRouter.put(
//   "/:id",
//   expressAsyncHandler(async (req, res) => {
//     const explanationId = req.params.id;
//     const explanation = await Explanation.findById(explanationId);
//     if (Explanation) {
//       explanation.title = req.body.title;
//       explanation.author = req.body.author;
//       explanation.category = req.body.category;
//       explanation.description = req.body.description;
//       const updatedExplanation = await explanation.save();
//       res.send({
//         message: "Explanation Updated",
//         explanation: updatedExplanation,
//       });
//     } else {
//       res.status(404).send({ message: "Explanation Not Found" });
//     }
//   })
// );

// explanationRouter.delete(
//   "/:id",
//   expressAsyncHandler(async (req, res) => {
//     const explanation = await Explanation.findById(req.params.id);
//     if (explanation) {
//       const deleteExplanation = await explanation.remove();
//       res.send({
//         message: "Explanation Deleted",
//         explanation: deleteExplanation,
//       });
//     } else {
//       res.status(404).send({ message: "Explanation Not Found" });
//     }
//   })
// );

module.exports = explanationRouter