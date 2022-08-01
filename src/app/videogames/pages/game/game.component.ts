import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

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

  game! : Game[];

  constructor(private activateRoute: ActivatedRoute,
               private videogamesService: VideogamesService,
               private router: Router) { }

  ngOnInit(): void {
    this.activateRoute.params  
    .pipe(
      switchMap( ({ id }) => this.videogamesService.getVideogameById(id))
    )
      .subscribe(game => {        
        this.game = game
        console.log(this.game)
      })
  }

  regresar(){
    this.router.navigate(['/videogames/listado'])
  }

}
