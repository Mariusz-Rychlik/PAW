import {router} from "express/lib/application";

const express = require('express')
import { PrismaClient, Prisma } from '@prisma/client'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.route('/CreateCategory/:CategoryName')
.get((req, res) => {
    let category = req.body;
})
.post((req, res) => {
    let category = req.body;
})
.put((req, res) => {
    let category = req.body;
})