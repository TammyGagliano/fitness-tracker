const db = require('../models');
const path = require('path');
const router = require('express').Router;

    // Index
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    router.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    get.app('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

module.exports = router;