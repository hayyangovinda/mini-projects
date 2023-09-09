import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { AdditionGameComponent } from './addition-game/addition-game.component';
import { HomeComponent } from './home/home.component';
import { MultiplicationTablesComponent } from './multiplication-tables/multiplication-tables.component';
import { MultiplicationExercisesComponent } from './multiplication-tables/multiplication-exercises/multiplication-exercises.component';
import { RockPaperScisscorsComponent } from './rock-paper-scisscors/rock-paper-scisscors.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { HangmanComponent } from './hangman/hangman.component';
import { EnglishDictionaryComponent } from './english-dictionary/english-dictionary.component';
import { DadJokesGeneratorComponent } from './dad-jokes-generator/dad-jokes-generator.component';
import { CountryGuideComponent } from './country-guide/country-guide.component';
import { EmojiMakerComponent } from './emoji-maker/emoji-maker.component';
import { WhacAMoleComponent } from './whac-a-mole/whac-a-mole.component';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'digital-clock', component: DigitalClockComponent },
  { path: 'addition-game', component: AdditionGameComponent },
  { path: 'multiplication-app', component: MultiplicationTablesComponent },
  {
    path: 'm-exercises/:table-no',
    component: MultiplicationExercisesComponent,
  },
  { path: 'rock-paper-scisscors', component: RockPaperScisscorsComponent },
  { path: 'memory-game', component: MemoryGameComponent },
  { path: 'sudoku', component: SudokuComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'english-dictionary', component: EnglishDictionaryComponent },
  { path: 'dad-jokes', component: DadJokesGeneratorComponent },
  { path: 'country-guide', component: CountryGuideComponent },
  { path: 'emoji-maker', component: EmojiMakerComponent },
  // this.randomPipePlant = this.getRandomPipe();
  { path: 'whac-a-mole', component: WhacAMoleComponent },
  { path: 'guess-the-number', component: GuessTheNumberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
