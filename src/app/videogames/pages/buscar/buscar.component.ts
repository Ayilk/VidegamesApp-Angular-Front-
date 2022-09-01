import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Game } from '../../interfaces/videogames.interface';
import { VideogamesService } from '../../services/videogames.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  videogames: Game[] = [];

  gameSeleccionado!: Game | undefined;

  constructor(private videogamesService: VideogamesService) { }

  ngOnInit(): void {
  }
 
  buscar(){

    this.videogamesService.getSugerencias( this.termino.trim() )
    .subscribe( games => this.videogames = games)
  }

  opcionSelecionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.gameSeleccionado = undefined
      console.log('no hay valor')
      return; 
    }

    const game: Game = event.option.value;
    this.termino = game.name

    this.videogamesService.getVideogameById(game._id)
    .subscribe(game => this.gameSeleccionado = game)
  }
}
