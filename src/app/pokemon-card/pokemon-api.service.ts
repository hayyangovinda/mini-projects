import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  pokeApi = ' https://pokeapi.co/api/v2/pokemon/';

  getPokemon() {
    let pokemoniD = Math.floor(Math.random() * 500) + 1;

    const finalUrl = this.pokeApi + pokemoniD;

    return this.http.get(finalUrl);
  }
}
