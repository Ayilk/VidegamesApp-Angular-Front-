import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/videogames.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent  {

  @Input() game!: Game;

  

}
