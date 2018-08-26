import { Component, OnInit } from '@angular/core';
import { Player} from './player';
import { GameService } from './game.service'; 

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
	
	jugadores:Player[]; 
	// TODO debe poder incrementar dinámicamente el puntaje
	// - debe ir chequeando que ninguno de los jugadores haya alcanzado el límite configurado

  // pasado el servicio en el constructor es una inyección de dependencias
  constructor(private gameService:GameService) {
  }

  sumarPuntos(jug:Player){
  	jug.puntos = this.gameService.sumarPunto(jug);
  	console.log('terminé de sumar puntos');
  }

  restarPuntos(jug:Player){
    jug.puntos = this.gameService.restarPunto(jug);
    console.log('terminé de restar puntos');
  }

  ngOnInit() {
  	// esto debería ser llamado a servicio para cargar los jugadores que correspondan
  	this.jugadores = [
		{id:1, nombre:'sebas', puntos:3},
		{id:2, nombre:'el gato', puntos:1}
	];
  }

}
