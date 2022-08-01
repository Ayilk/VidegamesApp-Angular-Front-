import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styles: [
  ]
})
export class GameComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params  
      .subscribe(({id}) => console.log(id))
  }

}
