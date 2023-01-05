const express = require("express");
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/main.html"))
})

app.get("/matches/:matchtype/:matchnumber", (req, res) => {
    res.sendFile(path.join(__dirname, "public/matches.html"))
})

app.listen(port, "192.168.0.129", () => {
    console.log(`Example app listening on port ${port}`);
});