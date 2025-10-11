import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  pokemonName: string = '';

  onSearch() {
    if (!this.pokemonName.trim()) return;
    this.search.emit(this.pokemonName.toLowerCase());
  }
}
