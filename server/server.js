import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routers from './routes'

app.use(express.json())

app.use(cors({origin: '*'}))

app.use('/', routers)

app.listen(3002, () => {
    console.log('connected to server')
})






