const express = require("express");
const cors = require("cors");

const app = express();

const { pool } = require("./initdb");

app.use(cors());

app.get("/", (req, res) => {
    res.send(process.env.WELCOME_MESSAGE);
});

app.get("/elements", async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT * FROM elements");
        if (!rows.length) {
            res.status(404).json({ error: "No elements found" });
        }
        res.json(rows);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.get("/elements/:symbol", async (req, res) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM elements where symbol = $1",
            [req.params.symbol]
        );
        if (rows[0]) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: "Element not found" });
        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = app;
