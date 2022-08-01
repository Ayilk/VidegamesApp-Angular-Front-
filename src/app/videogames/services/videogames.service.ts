import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/videogames.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getVideogames(){
    return this.http.get<Game[]>(`${this.baseUrl}/videogames`)
  }

  getVideogameById(id: number): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/videogames/${id}`)

  }

  getSugerencias( termino: string): Observable<Game[]>{
    return this.http.get<Game[]>(`${this.baseUrl}/videogames?name=${ termino }`)
  }
}
