const path = require('path');
const router = require('express').Router;

    // Index - Fitness Tracker Home Page
    router.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Exercise Page 
    router.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // Stats page
    router.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

module.exports = router;