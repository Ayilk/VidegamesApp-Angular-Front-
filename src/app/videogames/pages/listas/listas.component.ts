import { Component, OnInit } from '@angular/core';
import { TopConsole } from '../../interfaces/TopConsoles.interface';
import { VideogamesService } from '../../services/videogames.service';
import { TopDeveloper } from '../../interfaces/topdevelopers.interface';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styles: [
  ]
})
export class ListasComponent implements OnInit {

  topConsoles: TopConsole[] = [];
  topDevelopers: TopDeveloper[] = [];

  constructor(private videogameServices: VideogamesService) { }

  ngOnInit(): void {
    this.videogameServices.getTopConsoles()
      .subscribe(tops => {
        this.topConsoles = tops
      })

      this.videogameServices.getTopDevelopers()
      .subscribe(tops => {
        this.topDevelopers = tops
      })
  }


  
}
