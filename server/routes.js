import express from 'express'
import { get1, get2, get3, get4, get5, get6, get7, get8, get9 } from './C'

const router = express.Router()


router.get('/1', get1)
router.get('/2', get2)
router.get('/3', get3)
router.get('/4', get4)
router.get('/5', get5)
router.get('/6', get6)
router.get('/7', get7)
router.get('/8', get8)
router.get('/9', get9)


export default router