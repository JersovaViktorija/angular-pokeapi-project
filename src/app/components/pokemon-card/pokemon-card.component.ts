import { Component, inject, input, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../servers/pokemon.service';
import { catchError } from 'rxjs';
import { PokemonModel } from '../../model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent implements OnInit {
  pokemonName = input('clefairy');
  pokemonService = inject(PokemonService);
  pokemonItem: any[] = [];

  ngOnInit(): void {
    this.pokemonService
      .getOnePokemon(this.pokemonName())
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((pokemon) => {
        console.log(pokemon);

        this.pokemonItem.push(pokemon);
      });
  }
}
