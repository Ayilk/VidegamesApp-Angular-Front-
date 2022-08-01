import { Component, Input } from '@angular/core';
import { Game } from '../../interfaces/videogames.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [`
  mat-card {
    margin-top:20px;
  }
  `
  ]
})
export class TarjetasComponent  {

  @Input() game!: Game;

  

}
