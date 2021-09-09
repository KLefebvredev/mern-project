const RecetteModel = require("../models/recette.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;
const { uploadErrors } = require("../utils/errors.utils");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readRecette = (req, res) => {
    RecetteModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log("Error to get data : " + err);
    }).sort({ createdAt: -1 });
  };

  module.exports.createRecette = async (req, res) => {
    let recetteName;
  
    if (req.file !== null) {
      try {
        if (
          req.file.detectedMimeType != "image/jpg" &&
          req.file.detectedMimeType != "image/png" &&
          req.file.detectedMimeType != "image/jpeg"
        )
          throw Error("invalid file");
  
        if (req.file.size > 500000) throw Error("maxSize");
      } catch (err) {
        const errors = uploadErrors(err);
        return res.status(201).json({ errors });
      }
      recetteName = req.body.posterId + Date.now() + ".jpg";
  
      await pipeline(
        req.file.stream,
        fs.createWriteStream(
          `${__dirname}/../client/public/uploads/recettes/${recetteName}`
        )
      );
    }
  
    const newRecette = new RecetteModel({
      posterId: req.body.posterId,
      titre: req.body.titre,
      picture: req.file !== null ? "./uploads/recettes/" + recetteName : "",
      personne: req.body.personne,
      ingredient1: req.body.ingredient1,
      ingredient2: req.body.ingredient2,
      ingredient3: req.body.ingredient3,
      ingredient4: req.body.ingredient4,
      ingredient5: req.body.ingredient5,
      ingredient6: req.body.ingredient6,
      ingredient7: req.body.ingredient7,
      ingredient8: req.body.ingredient8,
      ingredient9: req.body.ingredient9,
      qtingredient1: req.body.qtingredient1,
      qtingredient2: req.body.qtingredient2,
      qtingredient3: req.body.qtingredient3,
      qtingredient4: req.body.qtingredient4,
      qtingredient5: req.body.qtingredient5,
      qtingredient6: req.body.qtingredient6,
      qtingredient7: req.body.qtingredient7,
      qtingredient8: req.body.qtingredient8,
      qtingredient9: req.body.qtingredient9,
      preparation: req.body.preparation,
      saison: req.body.saison,
      calories: req.body.calories,
      proteines: req.body.proteines,
      lipides: req.body.lipides,
      glucides: req.body.glucides,
      conseil: req.body.conseil,
      tags: req.body.tags,
      likers: [],
      comments: [],
    });
  
    try {
      const post = await newRecette.save();
      return res.status(201).json(post);
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  module.exports.updateRecette = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    const updatedRecord = {
      message: req.body.preparation,
    };
  
    RecetteModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Update error : " + err);
      }
    );
  };

  module.exports.deleteRecette = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    RecetteModel.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    });
  };

  module.exports.likeRecette = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await RecetteModel.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: { likers: req.body.id },
        },
        { new: true },
        (err, docs) => {
          if (err) return res.status(400).send(err);
        }
      );
      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $addToSet: { likes: req.params.id },
        },
        { new: true },
        (err, docs) => {
          if (!err) res.send(docs);
          else return res.status(400).send(err);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  module.exports.unlikeRecette = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await RecetteModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likers: req.body.id },
        },
        { new: true },
        (err, docs) => {
          if (err) return res.status(400).send(err);
        }
      );
      await UserModel.findByIdAndUpdate(
        req.body.id,
        {
          $pull: { likes: req.params.id },
        },
        { new: true },
        (err, docs) => {
          if (!err) res.send(docs);
          else return res.status(400).send(err);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  module.exports.commentRecette = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      return RecetteModel.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            comments: {
              commenterId: req.body.commenterId,
              commenterPseudo: req.body.commenterPseudo,
              text: req.body.text,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(400).send(err);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  };
  
  module.exports.editCommentRecette = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.i);
  
    try {
      return RecetteModel.findById(req.params.id, (err, docs) => {
        const theComment = docs.comments.find((comment) =>
          comment._id.equals(req.body.commentId)
        );
  
        if (!theComment) return res.status(404).send("Comment not found");
        theComment.text = req.body.text;
  
        return docs.save((err) => {
          if (!err) return res.status(200).send(docs);
          return res.status(500).send(err);
        });
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  };
  
  module.exports.deleteCommentRecette = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.i);
  
    try {
      return RecetteModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            comments: {
              _id: req.body.commentId,
            },
          },
        },
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs);
          else return res.status(400).send(err);
        }
      );
    } catch (err) {
      return res.status(400).send(err);
    }
  };