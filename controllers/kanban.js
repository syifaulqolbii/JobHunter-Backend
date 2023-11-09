const {kanban} = require('../models');

module.exports = {
    findAll: async (req, res) => {
        try {
            const result = await kanban.findAll();
            res.status(200).json({
                message: 'Get All Data',
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}