import { Component, OnInit } from '@angular/core';
import { Console } from '../../interfaces/consoles.interface';
import { Developer, Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
     img{
      width: 100%;
      border-radius: 5px;
     }
  `
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
              private activateRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {


    //console.log(this.router.url.includes('editar'));
    

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
    // console.log(this.game[0].id)
    if(this.game[0].id){
        //Actualizar
        this.videogameService.putVideogame(this.game)
        .subscribe(game => this.mostarSnackbar('Registro Actualizado'))
    }else{
      //Crear
      this.videogameService.postNewVideogame(this.game)
      .subscribe(
      //   resp => {
      //   console.log('Respuesta', resp);
      // }
      game => {
        this.router.navigate(['/videogames/editar', game[0].id  ]);
        this.mostarSnackbar('Registro creado')
      }
      )
    }
  }

  borrar(){
    this.videogameService.deleteVideogame(this.game[0].id!)
    .subscribe(resp => {
       this.router.navigate(['/videogames']);
    })
  }

  mostarSnackbar(mensaje: string){
    this.snackBar.open(mensaje, 'Ok!', {
      duration:2500
    })
  }

}
