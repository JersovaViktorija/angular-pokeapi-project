export class PokemonModel {
  id: number;
  name: string;
  height: number;
  weight: number;
  type: string;
  base_stats: string;
  image: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.height = 0;
    this.weight = 0;
    this.type = '';
    this.base_stats = '';
    this.image = '';
  }
}
