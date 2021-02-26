import favoriteMessage from '../Models/postFavorite.js';
// import blogMessage from '../Models/postBlog.js';

export const getFavorites = async (req, res) => {
    try {
        const favMessage = await favoriteMessage.find()

        res.status(200).json(favMessage)
    } catch(error) {
        res.status(404).json({message: error.message})
    }

}

export const postFavorite = async (req, res) => {
    const fav = req.body

    const newFavorite = new favoriteMessage(fav)
    try {
        await newFavorite.save()
        res.status(200).json(newFavorite)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

// export const getBlogs = async (req, res) => {
//     try {
//         const blogMessage = await blogMessage.find()

//         res.status(200).json(blogMessage)
//     } catch(error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// export const createBlog = async (req, res) => {
//     const blog =req.body

//     const newBlog = new blogMessage(blog)

//     try {
//         await newBlog.save()
//         res.status(200).json(newBlog)
//     } catch(error) {
//         res.status(404).json({ message: error.message })
//     }
// }