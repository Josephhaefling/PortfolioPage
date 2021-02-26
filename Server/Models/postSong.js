import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    title: String,
    url: String,
    description: {
        genres: [String]
    },
    likeCount: {
        type: Number,
        default: Number
    },
    createdAt: {
        type: String,
    }
})

const songMessage = mongoose.model('songSchema', songSchema)

export default songMessage