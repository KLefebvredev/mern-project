const mongoose = require('mongoose');

const RecetteSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        titre: {
            type: String,
            required: true
        },
        personne: {
            type: String,
            required: true
        },
        picture: {
            type: String,
        },
        ingredient1: {
            type: String,
            required: true
        },
        ingredient2: {
            type: String,
            required: true
        },
        ingredient3: {
            type: String,
            required: true
        },
        ingredient4: {
            type: String,
            required: true
        },
        ingredient5: {
            type: String,
            required: true
        },
        ingredient6: {
            type: String,
            required: true
        },
        ingredient7: {
            type: String
        },
        ingredient8: {
            type: String
        },
        ingredient9: {
            type: String
        },
        qtingredient1: {
            type: String,
            required: true
        },
        qtingredient2: {
            type: String,
            required: true
        },
        qtingredient3: {
            type: String,
            required: true
        },
        qtingredient4: {
            type: String,
            required: true
        },
        qtingredient5: {
            type: String,
            required: true
        },
        qtingredient6: {
            type: String,
            required: true
        },
        qtingredient7: {
            type: String
        },
        qtingredient8: {
            type: String
        },
        qtingredient9: {
            type: String
        },
        preparation: {
            type: String,
            trim: true,
            maxLenght:1000,
        },
        saison: {
            type: String,
            required: true
        },
        calories: {
            type: String,
            required: true
        },
        proteines: {
            type: String,
            required: true
        },
        lipides: {
            type: String,
            required: true
        },
        glucides: {
            type: String,
            required: true
        },
        conseil: {
            type: String
        },
        tags:{
            type: String
        },
        likers: {
            type: [String],
            required: true
        },
        comments: {
            type: [
                {
                    commenterId:String,
                    commenterPseudo:String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('recette', RecetteSchema)