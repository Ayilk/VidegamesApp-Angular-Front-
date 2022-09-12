import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Developer } from '../../interfaces/developers.interface';
import { Console } from '../../interfaces/consoles.interface';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [`
     img{
      width: 100%;
      border-radius: 5px;
     }
  `
  ]
})
export class EditarComponent implements OnInit {
  public get videogameService(): VideogamesService {
    return this._videogameService;
  }
  public set videogameService(value: VideogamesService) {
    this._videogameService = value;
  }

  videogames: Game[] = [];
  consoles: Console[] = [];
  developers: Developer[] = [];
  
  game: Game = {
    //_id: '',   
    name: '',
    description:'',
    year: 0,
    consoles: [],
    developers: [],
    image: '',
    active: true,
    __v: 0
  };

  constructor(private _videogameService: VideogamesService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    //console.log(this.router.url.includes('editar'));    

    this.activateRoute.params
    .pipe(
      switchMap( r => this.videogameService.getVideogameById(r["id"] ))
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
    if(this.game.name.trim().length === 0 ){
      return;
    }
    // console.log(this.game[0].id)
    if(this.game._id){
        //Actualizar
        this.videogameService.putVideogame(this.game)
        .subscribe(game => {
          console.log(game)
          this.router.navigate(['/videogames/', game._id  ]);
          this.mostarSnackbar('Registro Actualizado')})
    }
  }

 
  borrar(){

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.game
    });

    dialog.afterClosed().subscribe(result => {
      if(result){
        //console.log(result)
        this.videogameService.deleteVideogame(this.game)
        .subscribe(resp => {
          //console.log(resp)
           this.router.navigate(['/videogames']);
        })
      }
    }
      )
  }

  mostarSnackbar(mensaje: string){
    this.snackBar.open(mensaje, 'Ok!', {
      duration:2500
    })
  }

}
