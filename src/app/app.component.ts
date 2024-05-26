import { Component, importProvidersFrom } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamsComponent}
]

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, NavComponent]
})
export class AppComponent {
  title = 'Educational Web App';
}
