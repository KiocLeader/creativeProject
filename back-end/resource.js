const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();


const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const resourceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  url: String,
  title: String,
  description: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Resource = mongoose.model('Resource', resourceSchema);


router.post("/", validUser, async (req, res) => {
  try {
    const resource = new Resource({
      user: req.user,
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
    });
    await resource.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


router.get("/", async (req, res) => {
  try {
    let resources = await Resource.find().sort({
      created: -1
    }).populate('user');
    return res.send(resources);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});



module.exports = {
  model: Resource,
  routes: router,
}
