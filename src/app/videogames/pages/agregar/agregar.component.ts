import { Component, OnInit } from '@angular/core';
import { Console } from '../../interfaces/consoles.interface';
import { Developer, Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

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
  
  game: Game[] = [{
    id: 0,   
    name: '',
    description:'',
    year: 0,
    consoles: [],
    developers: [],
    image: '',
    active: true
  }];

  constructor(private videogameService: VideogamesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap( ({id}) => this.videogameService.getVideogameById(id ))
    )
    .subscribe( game => this.game = game)

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
    //console.log(this.game)
    if(this.game[0].name.trim().length === 0 ){
      return;
    }
    if(this.game[0].id){

    }else{
      
    }
    this.videogameService.postNewVideogame(this.game)
    .subscribe(resp => {
      console.log('Respuesta', resp);
    })
  }

}
