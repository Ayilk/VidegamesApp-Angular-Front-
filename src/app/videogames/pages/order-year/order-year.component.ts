import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-order-year',
  templateUrl: './order-year.component.html',
  styles: [
  ]
})
export class OrderYearComponent implements OnInit {

  videogames: Game[] = []

  constructor(private videogamesService: VideogamesService) { }

  ngOnInit(): void {
    this.videogamesService.getVideogames()
    .subscribe(games => {
      this.videogames = games
    })
  }

}
