import { __decorate } from "tslib";
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
let NavComponent = class NavComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    isTeamSelected() {
        return this.teamsService.isTeamSelected();
    }
};
NavComponent = __decorate([
    Component({
        selector: 'app-nav',
        standalone: true,
        templateUrl: './nav.component.html',
        styleUrl: './nav.component.css',
        imports: [RouterModule, NgIf]
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map