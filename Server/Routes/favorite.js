import express from "express"
import { getFavorites, postFavorite } from "../Controllers/favorites.js"

const router = express.Router()
    router.get('/', getFavorites)
    router.post('/', postFavorite)


export default router