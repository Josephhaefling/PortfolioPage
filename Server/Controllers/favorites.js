import favoriteMessage from "../Models/postFavorite.js"

export const getFavorites = async (req, res) => {
    try {
        const favoriteMessage = await favoriteMessage.find()
        console.log(favoriteMessage);

        res.status(200).json(favoriteMessage)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const postFavorite = async (req, res) => {
    const fav = req.body

    const newFavorite = new PostFavorite(fav)
    try {
        await newFavorite.save()
        res.status(200).json(newFavorite)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}