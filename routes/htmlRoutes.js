const db = require('../models');
const path = require('path');

module.exports = (app) => {
    // Index
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    get.app('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
}