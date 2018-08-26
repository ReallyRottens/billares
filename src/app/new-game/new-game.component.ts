import { Component, OnInit } from '@angular/core';
import { Player} from '../players/player'; // creo que esto sería mala práctica

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  points = [3,5,7];
	jugador1: Player;
	jugador2: Player;


  constructor() { }

  ngOnInit() {
  	this.jugador1 = new Player();
  	this.jugador2 = new Player()
  }

}
