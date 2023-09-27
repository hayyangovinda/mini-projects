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
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AiImageGeneratorComponent } from './ai-image-generator/ai-image-generator.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'Home', component: HomeComponent },
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
  { path: 'pokemon-card', component: PokemonCardComponent },
  { path: 'alarm-clock', component: AlarmClockComponent },
  { path: 'snake-game', component: SnakeGameComponent },
  { path: 'analog-clock', component: AnalogClockComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'color-slider', component: ColorSliderComponent },
  { path: 'recipe-app', component: RecipeAppComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'ai-image-generator', component: AiImageGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
