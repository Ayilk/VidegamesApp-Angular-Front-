import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-order-alfabeto',
  templateUrl: './order-alfabeto.component.html',
  styles: [
  ]
})
export class OrderAlfabetoComponent implements OnInit {

  videogames: Game[] = []

  constructor(private videogamesService: VideogamesService) { }

  @Input() orden!: string ;
  
  ngOnInit(): void {
    this.videogamesService.getVideogames()
    .subscribe(games => {
      let az = games.sort((a,b) => {
        if(a.name>b.name)return 1;
        if(a.name<b.name)return -1;
        return 0;
      })
      
        this.videogames = az;
      
      
    })
  }

}
