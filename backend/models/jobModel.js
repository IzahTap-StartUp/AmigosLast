const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
title: {type: String, required: true},
coverPhoto: {type: String, required: true},
description: {type: String, required: true},
location: {type: String, required: true},
type: {type: String, required: true},
},
{
    timeStamps: true
});

module.exports = mongoose.model("Job", jobSchema);
