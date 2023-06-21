const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");

let PORT = 4000;
let HOST = "127.0.0.1";

app.use(express.static("public"));

app.get("/index", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
})

app.listen(PORT,  HOST, () => {
    console.log(`[server] listening on ${HOST}:${PORT}`);
})