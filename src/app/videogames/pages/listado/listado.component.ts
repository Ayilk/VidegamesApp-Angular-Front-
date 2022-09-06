import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  consolas = new FormControl('');

  consoles: Console[] = [];
  developers: Developer[] = [];

  constructor( private videogameServices: VideogamesService ){}

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

}
