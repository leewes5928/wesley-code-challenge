const express = require("express");
const db = require("./knex.js");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/api/users", async (req, res) => {
    try {
        const user = await db.select().table('users');
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        console.error("Error fetching user.", err);
        res.status(400).json({ success: false });
    };
});

app.post("/api/users", async (req, res) => {
    try {
        const user = await db.select().table('users').insert( req.body.user );
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        console.err("Error posting user.", err);
        res.status(400).json({ success: false });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;