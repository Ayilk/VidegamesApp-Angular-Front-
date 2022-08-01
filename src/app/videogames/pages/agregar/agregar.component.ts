import { Component, OnInit } from '@angular/core';
import { Console } from '../../interfaces/consoles.interface';
import { Developer, Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  videogames: Game[] = [];
  consoles: Console[] = [];
  developers: Developer[] = [];
  
  game: Game = {
    id: 0,   
    name: '',
    description:'',
    year: 0,
    consoles: [],
    developers: [],
    image: '',
    active: true
  };

  constructor(private videogameService: VideogamesService) { }

  ngOnInit(): void {
    this.videogameService.getVideogames()
    .subscribe(games => {
      this.videogames = games;      
    })
        
    this.videogameService.getConsoles()
    .subscribe(consoles => {
      this.consoles = consoles
    })

    this.videogameService.getDevelopers()
    .subscribe(dev => {
      this.developers = dev
    })

  }

  guardar(){
    console.log(this.game)
    if(this.game.name.trim().length === 0 ){
      return;
    }

    this.videogameService.postNewVideogame(this.game)
    .subscribe(resp => {
      console.log('Respuesta', resp);
    })
  }

}
