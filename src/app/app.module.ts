import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionGameComponent } from './addition-game/addition-game.component';
import { FormsModule } from '@angular/forms';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { HomeComponent } from './home/home.component';
import { MultiplicationTablesComponent } from './multiplication-tables/multiplication-tables.component';
import { MultiplicationExercisesComponent } from './multiplication-tables/multiplication-exercises/multiplication-exercises.component';
import { RockPaperScisscorsComponent } from './rock-paper-scisscors/rock-paper-scisscors.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { HangmanComponent } from './hangman/hangman.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EnglishDictionaryComponent } from './english-dictionary/english-dictionary.component';
import { HttpClientModule } from '@angular/common/http';
import { DadJokesGeneratorComponent } from './dad-jokes-generator/dad-jokes-generator.component';
import { CountryGuideComponent } from './country-guide/country-guide.component';
import { EmojiMakerComponent } from './emoji-maker/emoji-maker.component';
import { CommonModule } from '@angular/common';
import { WhacAMoleComponent } from './whac-a-mole/whac-a-mole.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionGameComponent,
    DigitalClockComponent,
    HomeComponent,
    MultiplicationTablesComponent,
    MultiplicationExercisesComponent,
    RockPaperScisscorsComponent,
    MemoryGameComponent,
    SudokuComponent,
    HangmanComponent,
    EnglishDictionaryComponent,
    DadJokesGeneratorComponent,
    CountryGuideComponent,
    EmojiMakerComponent,
    WhacAMoleComponent,
    GuessTheNumberComponent,
    PokemonCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
