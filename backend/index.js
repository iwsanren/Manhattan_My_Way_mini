// backend/index.js
const express = require('express');
const axios = require('axios');  // 用于请求 Flask 服务
const app = express();
app.use(express.json());

app.post('/get-score', async (req, res) => {
    const { start, end } = req.body;

    try {
        // const response = await axios.post('http://model-service:5000/score', {
        const response = await axios.post('http://localhost:5000/score', {
            start,
            end
        });
        res.json({ score: response.data.score });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Failed to get score from model service' });
    }
});

app.listen(3000, () => {
    console.log('Backend service running on port 3000');
});
