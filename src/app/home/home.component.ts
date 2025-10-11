import { Component, inject, input, OnInit, signal } from '@angular/core';
import { PokemonService } from '../servers/pokemon.service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pokemonName: string = '';
  pokemonService = inject(PokemonService);
  pokemonItem: any[] = [];
  loading: boolean = false;
  error: string = '';

  ngOnInit(): void {
    this.loading = false;
    this.error = '';
  }

  getPokemon() {
    if (!this.pokemonName.trim()) return;
    this.loading = true;
    this.pokemonItem = [];
    this.getOnePokemon(this.pokemonName.toLowerCase());
  }

  getOnePokemon(name: string): void {
    console.log(this.pokemonName);
    this.pokemonService
      .getOnePokemon(name)
      .pipe(
        catchError((err) => {
          this.loading = false;
          this.error = 'Pokemon is not found. Please try again.';
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
