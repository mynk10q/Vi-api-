const axios = require('axios');

// Blocked Number
const BLOCKED_NUMBER = '7669610720';

app.get('/api', async (req, res) => {
    try {
        const number = req.query.number;

        // Number check
        if (!number) {
            return res.status(400).json({
                status: false,
                message: 'Number is required'
            });
        }

        // Owner number block
        if (number === BLOCKED_NUMBER) {
            return res.status(403).json({
                status: false,
                message: 'lode owner ka number hi search kr rha ha maan ja'
            });
        }

        // Main API
        const apiUrl = `http://144.24.153.5:5000/lookup?number=${number}`;

        const response = await axios.get(apiUrl, {
            timeout: 15000
        });

        // Direct response from main backend
        return res.json(response.data);

    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'API Error',
            error: err.message
        });
    }
});

// Home route
app.get('/', (req, res) => {
    res.send('API Running Successfully');
});

module.exports = async (req, res) => {
    try {
        const number = req.query.number;

        if (!number) {
            return res.status(400).json({
                status: false,
                message: 'Number is required'
            });
        }

        // Owner number block
        if (number === BLOCKED_NUMBER) {
            return res.status(403).json({
                status: false,
                message: 'lode owner ka number hi search kr rha ha maan ja'
            });
        }

        // Main API
        const apiUrl = `http://144.24.153.5:5000/lookup?number=${number}`;

        const response = await axios.get(apiUrl, {
            timeout: 15000
        });

        return res.status(200).json(response.data);

    } catch (err) {
        return res.status(500).json({
            status: false,
            message: 'API Error',
            error: err.message
        });
    }
};
