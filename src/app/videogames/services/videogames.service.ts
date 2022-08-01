import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../interfaces/videogames.interface';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(private http: HttpClient) { }

  getVideogames(){
    return this.http.get<Game[]>('https://videogames-app-mm.herokuapp.com/videogames')
  }
}