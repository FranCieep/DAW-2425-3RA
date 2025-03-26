import { Jugador } from './jugador';
export class Participa {
  jugador: Jugador;
  profesion: string;

  constructor(Juggador: Jugador, profession: string){
    this.profesion=profession;
    this.jugador=Juggador;
  }


}
