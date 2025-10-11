import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../servers/pokemon.service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input() pokemon: any;

  getType(pokemon: any): string {
    return pokemon && pokemon.types.length > 0
      ? pokemon.types[0].type.name
      : '';
  }
}
