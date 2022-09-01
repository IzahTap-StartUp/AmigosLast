const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Job = require("../models/jobModel.js");

const jobRouter = express.Router();

jobRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const jobs = await Job.find();
    res.send({ jobs });
  })
);

jobRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (job) {
      res.send(job);
    } else {
      res.status(404).send({ message: "job Not Found" });
    }
  })
);

jobRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const job = new Job({
      title: "IZAHTAP job" + Date.now(),
      coverPhoto: "/images/p1.jpg",
      location: "Azerbaijan",
      type: "Remote",
      description:
        "IZAHTAP There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    });
    const createdjob = await job.save();
    res.send({ message: "job Created", job: createdjob });
  })
);

jobRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const jobId = req.params.id;
    const job = await job.findById(jobId);
    if (job) {
      job.title = req.body.title;
      job.type = req.body.type;
      job.location = req.body.location;
      job.coverPhoto = req.body.coverPhoto;
      job.description = req.body.description;
      const updatedjob = await job.save();
      res.send({ message: "job Updated", job: updatedjob });
    } else {
      res.status(404).send({ message: "job Not Found" });
    }
  })
);

jobRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (job) {
      const deletejob = await job.remove();
      res.send({ message: "job Deleted", job: deletejob });
    } else {
      res.status(404).send({ message: "job Not Found" });
    }
  })
);

module.exports = jobRouter
