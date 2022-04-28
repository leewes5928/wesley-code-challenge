const express = require("express");
const db = require("./knex.js");
const path = require("path");

const app = express();

app.use(express.json());
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
        const user = await db.table( 'users' ).insert( req.body ).returning( "*" );
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        console.error("Error posting user.", err);
        res.status(400).json({ success: false });
    }
});

app.patch("/api/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const patchUser = await db.table( 'users' ).where({ id }).update( req.body ).returning( "*" );
        res.status(200).json({ success: true, data: patchUser });
    } catch (err) {
        consoleerror("Error patching user.", err);
        res.status(400).json({ success: false });
    }
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;