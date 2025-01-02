import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    source: {
        name: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    category: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }],
    image: {
        type: String
    },
    country: {
        type: String
    },
    liker: {
        type: Number,
        default: 0
    },
    dislike: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Article = mongoose.model('Article', articleSchema);

export default Article;
