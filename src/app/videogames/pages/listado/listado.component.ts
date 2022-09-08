import { Component, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Console } from '../../interfaces/consoles.interface';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';
import { Developer } from '../../interfaces/developers.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    
  
  `]
})
export class ListadoComponent implements OnInit {
  
   
   consoles: Console[] = [];
   developers: Developer[] = [];
   videogames: Game[] = [];

  constructor( private videogameServices: VideogamesService,
                ){}

  ngOnInit(): void {
    this.videogameServices.getConsoles()
      .subscribe(consoles => {
        //console.log(consoles)
        this.consoles = consoles
      })

    this.videogameServices.getDevelopers()
      .subscribe(developers => {
        this.developers = developers
      })
  }

  getAll(){
    this.videogameServices.getVideogames()
    .subscribe(games => {
      this.videogames = games
    })
  }
  getAZ(){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        let az = games.sort((a,b) => {
          if(a.name>b.name)return 1;
          if(a.name<b.name)return -1;
          return 0;
        })
        
          this.videogames = az;
      })
  }

  getZA(){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        let za = games.sort((a,b) => {
          if(a.name<b.name)return 1;
          if(a.name>b.name)return -1;
          return 0;
        })
        
          this.videogames = za;
      })
  }

  getOlds(){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        this.videogames = games.sort((a,b) => a.year - b.year)
      })
  }
  getNews(){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        this.videogames = games.sort((a,b) => b.year - a.year)
      })
  }
  getByConsole(console: string){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        this.videogames = games.filter(el => el.consoles.includes(console))
      })
  }
 
  

  getByDev(developer: string){
    this.videogameServices.getVideogames()
      .subscribe(games => {
        this.videogames = games.filter(el => el.developers.includes(developer))
      })
  }
 
}
