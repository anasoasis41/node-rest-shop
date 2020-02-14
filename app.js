const express = require('express');
const app = express();

app.use((rep, res, next) => {
    res.status(200).json({
        message: 'It works!'
    });
});

module.exports = app;