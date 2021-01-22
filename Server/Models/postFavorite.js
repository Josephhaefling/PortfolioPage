import mongoose from "mongoose";

const favoriteSchema = mongoose.Schema({
    article: Object,
})

const favoriteMessage = mongoose.model("favoriteMessage", favoriteSchema)

export default favoriteMessage