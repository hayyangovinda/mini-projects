import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from './pokemon-api.service';
import { typeColor } from './type-color-class';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  constructor(private pokeService: PokemonApiService) {}

  typeColor: typeColor = {
    bug: '#26de81',
    dragon: '#ffeaa7',
    electric: '#fed330',
    fairy: '#FF0069',
    fighting: '#30336b',
    fire: '#f0932b',
    flying: '#81ecec',
    grass: '#00b894',
    ground: '#EFB549',
    ghost: '#a55eea',
    ice: '#74b9ff',
    normal: '#95afc0',
    poison: '#6c5ce7',
    psychic: '#a29bfe',
    rock: '#2d3436',
    water: '#0190FF',
  };
  pokemonName!: string;
  hp!: number;
  attack!: number;
  defense!: number;
  speed!: number;
  pokemonResponse!: any;
  imgSrc!: string;
  types!: string[];
  themeColor!: string;
  themeSelector!: string;

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeService.getPokemon().subscribe((result) => {
      this.pokemonResponse = result;
      this.pokemonName =
        this.pokemonResponse.forms[0].name[0].toUpperCase() +
        this.pokemonResponse.forms[0].name.slice(1);
      this.imgSrc =
        this.pokemonResponse.sprites.other.dream_world.front_default;
      this.hp = this.pokemonResponse.stats[0].base_stat;
      this.attack = this.pokemonResponse.stats[1].base_stat;
      this.defense = this.pokemonResponse.stats[2].base_stat;
      this.speed = this.pokemonResponse.stats[5].base_stat;
      this.types = this.pokemonResponse.types.map(
        (elem: any) => elem.type.name
      );

      this.themeSelector = this.types[0];
      this.themeColor = this.typeColor[this.themeSelector];
      console.log(this.themeColor);
    });
  }
}
