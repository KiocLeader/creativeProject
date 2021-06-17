const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();


const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const runSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  distance: String,
  title: String,
  description: String,
  time: String,
  avgPace: String,
  avgHR: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Run = mongoose.model('Run', runSchema);


router.post("/", validUser, async (req, res) => {
  try {
    const run = new Run({
      user: req.user,
      distance: req.body.distance,
      title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      avgPace: req.body.avgPace,
      avgHR: req.body.avgHR
    });
    await run.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


router.get("/", validUser, async (req, res) => {

  try {
    let photos = await Photo.find({
      user: req.user
    }).sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/all", async (req, res) => {
  try {
    let photos = await Photo.find().sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});



module.exports = {
  model: Run,
  routes: router,
}
