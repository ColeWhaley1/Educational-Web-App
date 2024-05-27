import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TeamsService = class TeamsService {
    constructor() {
        this.currentTeamId = null;
    }
    isTeamSelected() {
        return this.currentTeamId ? true : false;
    }
    getCurrTeamId() {
        return this.currentTeamId;
    }
};
TeamsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TeamsService);
export { TeamsService };
//# sourceMappingURL=teams.service.js.map