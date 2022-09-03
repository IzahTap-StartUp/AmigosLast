import mongoose from 'mongoose';

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

const Job = mongoose.model('Job', jobSchema);
export default Job;
