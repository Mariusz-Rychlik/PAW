import {router} from "express/lib/application";

const express = require('express')
import { PrismaClient, Prisma } from '@prisma/client'
const app = express()
const port = 3000
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const categoryRouter = express.Router();
const entryRouter = express.Router();
const commentRouter = express.Router();

app.use(express.json());

app.use('/entries', entryRouter);
app.use('/comments', commentRouter);
app.use('/categories', entryRouter);

entryRouter.get('/', async (req, res) => {
    const entries = await prisma.entry.findMany({
        include:{category:true, comments:true},
    });
    res.json(entries);
})
entryRouter.post('/', async (req, res) => {
        const { text, Autor, categoryId } = req.body;
        const entry = await prisma.entry.create({
            data: {
                text,
                Autor,
                category: { connect: { id: categoryId } },
            },
        });
        res.json(entry);
})
entryRouter.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { text, Autor, categoryId } = req.body;
        const updateEntry = await prisma.entry.update({
            where: { id: parseInt(id) },
            data: {
                text,
                Autor,
                category: { connect: { id: categoryId } },
            },
        });
        res.json(updateEntry);

})
entryRouter.delete('/:id', async (req, res) => {
        const { id } = req.params;
        await prisma.entry.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'Post deleted' });
});

categoryRouter.get('/', async (req, res) => {
        const categories = await prisma.category.findMany({
            include: { entries: true },
        });
        res.json(categories);
});
categoryRouter.post('/', async (req, res) => {
        const { category } = req.body;
        const categoryr = await prisma.category.create({
            data: { category },
        });
        res.json(categoryr);
});
categoryRouter.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { category } = req.body;
        const updateCategory = await prisma.category.update({
            where: { id: parseInt(id) },
            data: { category },
        });
        res.json(updateCategory);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

