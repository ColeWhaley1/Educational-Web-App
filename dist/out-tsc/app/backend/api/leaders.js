const express = require('express');
const router = express.Router();
const LeadersService = require('../services/leadersService');
router.get('/', async (req, res) => {
    try {
        const leaders = LeadersService.getAllLeaders();
        res.json(leaders);
    }
    catch (error) {
        res.status(500).send('INTERNAL ERROR while retrieving leaders!');
    }
});
export default router;
//# sourceMappingURL=leaders.js.map