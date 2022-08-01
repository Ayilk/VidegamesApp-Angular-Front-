import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  videogames: Game[] = []

  constructor(private videogamesService: VideogamesService) { }

  ngOnInit(): void {
    this.videogamesService.getVideogames()
    .subscribe(games => {
      this.videogames = games
    })
  }

}
