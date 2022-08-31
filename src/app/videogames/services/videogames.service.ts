import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/videogames.interface';
import { environment } from '../../../environments/environment.prod';
import { Console } from '../interfaces/consoles.interface';
import { Developer } from '../interfaces/developers.interface';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVideogames(){
    return this.http.get<Game[]>(`${this.baseUrl}/videogames`)
  }

  getVideogameById(_id: string  ): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/videogames/${_id}`)

  }

  getSugerencias( termino: string): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/videogames?name=${ termino }`)
  }

  getConsoles(): Observable<Console[]>{
    return this.http.get<Console[]>(`${this.baseUrl}/consoles`)
  }

  getDevelopers(): Observable<Developer[]>{
    return this.http.get<Developer[]>(`${this.baseUrl}/developers`)
  }

  postNewVideogame(game:Game[]): Observable<Game[]>{
    return this.http.post<Game[]>(`${this.baseUrl}/videogames`, game)
  }

  putVideogame(game:Game[]): Observable<Game[]>{
    return this.http.put<Game[]>(`${this.baseUrl}/videogames/${game[0]._id}`, game)
  }

  deleteVideogame (game:Game[]): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/videogames/${game[0]._id}`)
  }
}
