import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  imports: [RouterModule, NgIf]
})
export class NavComponent {

  constructor(private teamsService: TeamsService){}

  isTeamSelected() {
    return this.teamsService.isTeamSelected();
  }

}
