const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Learning Coach");
});

app.get('/hello', (req, res) => {
    res.send("Hello Harshit");
});

app.get("/test-python", async(req, res) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/");
        res.json(response.data);
    }catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Could not connect to Python Server"
        });
    }
});

app.post('/profile', async (req, res) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/remember-profile", req.body);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: "Could not connect to Python Server"
        });
    }
});

app.post("/chat", async (req, res) => {
    
    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/recall",
            req.body
        );

        res.json(response.data);
    }catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Could not connect to Python Server"
        });
    }
})

app.listen(3000, () => {
    console.log("Learning Coach Backend is Running");
});