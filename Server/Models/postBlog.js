// import { text } from 'body-parser';
import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: String,
    content: String,
    images: [String],
    tags: [String],
    likeCount: {
        type: Number,
        default: Number
    },
    createdAt: {
        type: String,
    }
})

const blogMessage = mongoose.model('blogSchema', blogSchema)

export default blogMessage