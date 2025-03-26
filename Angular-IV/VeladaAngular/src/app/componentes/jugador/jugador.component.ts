import { Participa } from './../../common/participa';
import { Jugador } from './../../common/jugador';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jugador',
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {
  persona ={
    nombre: 'DavidGarcia ',
    alias: 'The Gregg',
    pais: 'Spain',
    pesoenKG: 75,
    rival : 'WetsCol',
    win: 0,
    lose: 0
  }

  jugador: Jugador={
    nombre: 'Rocío',
    alias: 'RoRo',
    pais: 'Spain',
    pesoenKG: 56,
    rival : 'Abby',
    win: 0,
    lose: 0
  }

  miParticipante: Participa={
    jugador: this.jugador,
    profesion: 'streamer'
  }

  esdebut(Jugador: Jugador){
    if(this.jugador.win == 0 || this.jugador.lose == 0){
      return 'Debutante';
    }else{
      return 'Experimentado';
    }

  }
}
