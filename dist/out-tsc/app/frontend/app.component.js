import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
export const routes = [
    { path: '', component: HomeComponent },
    { path: 'teams', component: TeamsComponent }
];
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Educational Web App';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
        imports: [RouterModule, NavComponent]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map