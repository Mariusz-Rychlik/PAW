const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/tanks", (req, res) => {
    db.query("SELECT * FROM tanks", (err, results) => {
        if (err) {
            console.error("Error fetching tanks:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
});

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
