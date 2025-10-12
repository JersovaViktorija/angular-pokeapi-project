import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from '../model/pokemon/pokemon.module';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  http = inject(HttpClient);

  getPokemons() {
    return this.http.get<Array<PokemonModel>>(
      `https://pokeapi.co/api/v2/pokemon/?limit=10`
    );
  }
  getOnePokemon(name: string) {
    return this.http.get<Array<PokemonModel>>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}
