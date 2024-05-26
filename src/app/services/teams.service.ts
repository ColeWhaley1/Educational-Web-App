import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  public currentTeamId: number | null = null;

  isTeamSelected(){
    return this.currentTeamId ? true : false;
  }

  getCurrTeamId(){
    return this.currentTeamId;
  }

  

}
