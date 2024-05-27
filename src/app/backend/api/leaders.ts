import { Leader } from "../types";

const express = require('express');
const router = express.Router();

const LeadersService = require('../services/leadersService');

router.get('/', async (req: any, res: any) => {
    try{
        const leaders: Leader[] = LeadersService.getAllLeaders();
        res.json(leaders);
    } catch (error) {
        res.status(500).send('INTERNAL ERROR while retrieving leaders!');
    }
})

export default router;