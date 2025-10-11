import { Component, inject, input, OnInit, signal } from '@angular/core';
import { PokemonService } from '../servers/pokemon.service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../components/search/search.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, SearchComponent, PokemonCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pokemonItem: any[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loading = false;
    this.error = '';
  }

  getPokemon(name: string) {
    this.loading = true;
    this.error = '';
    this.pokemonItem = [];
    this.pokemonService
      .getOnePokemon(name.toLowerCase())
      .pipe(
        catchError((err) => {
          this.loading = false;
          this.error = 'Pokémon is not found. Please try again.';
          console.log(err);
          throw err;
        })
      )
      .subscribe((pokemon) => {
        console.log(pokemon);

        this.pokemonItem = [pokemon];
        this.loading = false;
      });
  }

  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0
      ? pokemon.types[0].type.name
      : '';
  }
}
