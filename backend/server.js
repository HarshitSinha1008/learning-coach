const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Learning Coach");
});

app.get('/hello', (req, res) => {
    res.send("Hello Harshit");
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.json({
        message: "Profile recived successfully"});
});

app.listen(3000, () => {
    console.log("Learning Coach Backend is Running");
});