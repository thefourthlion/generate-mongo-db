const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    let newPost = new Post({
      data1: req.body.data1,
      data2: req.body.data2,
      data3: req.body.data3,
      data4: req.body.data4,
      data5: req.body.data5,
    });
    await newPost.save();
    res.send(newPost);
  } catch (err) {
    console.log(err);
  }
};

exports.readPost = async (req, res) => {
  try {
    Post.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.readPostFromID = async (req, res) => {
  try {
    await Post.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updatePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      {
        data1: req.body.data1,
        data2: req.body.data2,
        data3: req.body.data3,
        data4: req.body.data4,
        data6: req.body.data6,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    if ((await Post.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Post.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
