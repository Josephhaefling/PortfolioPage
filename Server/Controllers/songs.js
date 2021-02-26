import songMessage from '../Models/postSong.js';

export const getSongs = async (req, res) => {
    try {
        const songMessage = await songMessage.find()

        res.status(200).json(songMessage)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const postSong = async (req, res) => {
    const song = req.body

    const newSong = new songMessage(fav)
    try {
        await newSong.save()
        res.status(200).json(newSong)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}
