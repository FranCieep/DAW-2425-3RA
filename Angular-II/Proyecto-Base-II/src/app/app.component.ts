import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Proyecto-Base-II';

  name = 'Bertha';
  direccion = 'Calle 123';
  edad = 25;
  altura = 1.60;
  estado = true;
  frutas: string[] =[ 'manzana', 'pera', 'uva', 'sandia', 'melon', 'aguacate'];
  notas = [1,2,3,4,5,6,7,8,9,10];
  fruta={
    nombre: 'manzana',
    color: 'rojo',
    precio: 1.50
  }

  masUno(): number{
     return this.edad += 1;
  }
  cambairEstado(): void{
    this.estado= false
    this.fruta={
      nombre: 'mandarina',
      color: 'naranja',
      precio: 2.50  
    }
  }

}
