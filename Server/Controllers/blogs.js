import blogMessage from '../Models/postBlog.js';

export const getBlogs = async (req, res) => {
    try {
        const blogMessage = await blogMessage.find()

        res.status(200).json(blogMessage)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createBlog = async (req, res) => {
    const blog =req.body

    const newBlog = new blogMessage(blog)

    try {
        await newBlog.save()
        res.status(200).json(newBlog)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}