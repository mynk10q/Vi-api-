const axios = require('axios');

const BLOCKED_NUMBER = '7669610720';

module.exports = async (req, res) => {
    try {
        const number = req.query.number;

        if (!number) {
            return res.status(400).json({
                status: false,
                message: 'Number is required'
            });
        }

        if (number === BLOCKED_NUMBER) {
            return res.status(403).json({
                status: false,
                message: 'lode owner ka number hi search kr rha ha maan ja'
            });
        }

        const response = await axios.get(
            `http://144.24.153.5:5000/lookup?number=${number}`
        );

        return res.status(200).json(response.data);

    } catch (err) {
        return res.status(500).json({
            status: false,
            error: err.message
        });
    }
};
