import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

	sumarPunto(jugador:Player) : number{
		return jugador.puntos + 1;
	}

	restarPunto(jugador:Player) : number{
		if (jugador.puntos > 0) {
			return jugador.puntos - 1;
		}
		return 0;
	}

  constructor() { }
}
