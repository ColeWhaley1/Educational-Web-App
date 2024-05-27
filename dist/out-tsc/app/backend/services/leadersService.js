"use strict";
const pool = require('../db');
class LeadersService {
    static async getAllLeaders() {
        return await pool.query('SELECT * FROM Leader').rows;
    }
}
module.exports = [LeadersService];
//# sourceMappingURL=leadersService.js.map