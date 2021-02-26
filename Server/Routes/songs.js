import express from 'express';
import { getSongs, postSong } from '../Controllers/songs.js';

const router = express.Router()
    router.get('/', getSongs)
    router.post('/', postSong)

export default router