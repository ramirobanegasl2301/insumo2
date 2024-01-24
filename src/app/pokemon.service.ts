// src/app/pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonById(id: number): Observable<any> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get(url);
  }

  getPokemonByName(name: string): Observable<any> {
    const url = `${this.apiUrl}${name.toLowerCase()}/`;
    return this.http.get(url);
  }
}
