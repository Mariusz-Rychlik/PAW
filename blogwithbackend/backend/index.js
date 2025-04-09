const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const POSTS_PATH = path.join(__dirname, "data", "posts.json");
const COMMENTS_PATH = path.join(__dirname, "data", "comments.json");

function readJSON(filePath) {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.get("/posts", (req, res) => {
    const posts = readJSON(POSTS_PATH);
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const posts = readJSON(POSTS_PATH);
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send("Post not found");
    res.json(post);
});

app.get("/posts/:id/comments", (req, res) => {
    const comments = readJSON(COMMENTS_PATH);
    res.json(comments[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
    const comments = readJSON(COMMENTS_PATH);
    const postId = req.params.id;
    const content = req.body.content;

    if (!comments[postId]) comments[postId] = [];

    const newComment = {
        id: comments[postId].length + 1,
        content
    };

    comments[postId].push(newComment);
    writeJSON(COMMENTS_PATH, comments);

    res.status(201).json(newComment);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`JSON-backed backend running at http://localhost:${PORT}`);
});
