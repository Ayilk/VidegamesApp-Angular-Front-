import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: [`
     img {
      width: 100%;
      border-radius: 5px;
     }
  `
  ]
})
export class GameComponent implements OnInit {

  game! : Game;

  constructor(private activateRoute: ActivatedRoute,
               private videogamesService: VideogamesService,
               private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params  
    .pipe(
      switchMap(({id}) => {
        console.log(id)
        
        let game = this.videogamesService.getVideogameById(id);
        return game
      })
    )
    
      .subscribe(game => {  
        console.log(game)      
        this.game = game
        //console.log(this.game)
      })
  }

 

  regresar(){
    this.router.navigate(['/videogames/listado'])
  }

}
