// src/app/app.component.ts
import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pokemonId: number;
  pokemonName: string;
  pokemonInfo: any;

  constructor(private pokemonService: PokemonService) {
    this.pokemonId = 0; // O el valor inicial que desees
    this.pokemonName = '';
    this.pokemonInfo = null;
  }

  buscarPokemonPorId() {
    if (this.pokemonId) {
      this.pokemonService.getPokemonById(this.pokemonId).subscribe((data) => {
        this.pokemonInfo = data;
      });
    }
  }

  buscarPokemonPorNombre() {
    if (this.pokemonName) {
      this.pokemonService.getPokemonByName(this.pokemonName).subscribe((data) => {
        this.pokemonInfo = data;
      });
    }
  }
}
