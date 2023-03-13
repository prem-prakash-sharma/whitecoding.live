const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json())

app.post('/api/login', (req, res) => {
    const user = req.body.username
    res.status(200).send(`heloo ${user}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
