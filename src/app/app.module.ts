import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionGameComponent } from './addition-game/addition-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginFormComponent } from './login-form/login-form.component';
import { AlarmClockComponent } from './alarm-clock/alarm-clock.component';
import { SnakeGameComponent } from './snake-game/snake-game.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { AiImageGeneratorComponent } from './ai-image-generator/ai-image-generator.component';
import { CaptchaGeneratorComponent } from './captcha-generator/captcha-generator.component';
import { RegistrationFormComponent } from './registration.form/registration.form.component';

import { AnimationsComponent } from './Css-animation/components/animations/animations.component';
import { Button1Component } from './Css-animation/components/buttons/button1/button1.component';
import { Button2Component } from './Css-animation/components/buttons/button2/button2.component';
import { Button3Component } from './Css-animation/components/buttons/button3/button3.component';
import { Button4Component } from './Css-animation/components/buttons/button4/button4.component';
import { Button5Component } from './Css-animation/components/buttons/button5/button5.component';
import { Button6Component } from './Css-animation/components/buttons/button6/button6.component';
import { AllButtonsComponent } from './Css-animation/components/buttons/all-buttons/all-buttons.component';
import { Button7Component } from './Css-animation/components/buttons/button7/button7.component';
import { Button8Component } from './Css-animation/components/buttons/button8/button8.component';
import { Button9Component } from './Css-animation/components/buttons/button9/button9.component';
import { Button10Component } from './Css-animation/components/buttons/button10/button10.component';
import { Button11Component } from './Css-animation/components/buttons/button11/button11.component';
import { Button12Component } from './Css-animation/components/buttons/button12/button12.component';
import { Button13Component } from './Css-animation/components/buttons/button13/button13.component';
import { Button14Component } from './Css-animation/components/buttons/button14/button14.component';
import { Button15Component } from './Css-animation/components/buttons/button15/button15.component';
import { Button16Component } from './Css-animation/components/buttons/button16/button16.component';
import { Button17Component } from './Css-animation/components/buttons/button17/button17.component';
import { Button18Component } from './Css-animation/components/buttons/button18/button18.component';
import { Button19Component } from './Css-animation/components/buttons/button19/button19.component';
import { AllImagesComponent } from './Css-animation/components/images-effects/all-images/all-images.component';
import { Image1Component } from './Css-animation/components/images-effects/image1/image1.component';
import { Image2Component } from './Css-animation/components/images-effects/image2/image2.component';
import { Image3Component } from './Css-animation/components/images-effects/image3/image3.component';
import { Image4Component } from './Css-animation/components/images-effects/image4/image4.component';
import { Image5Component } from './Css-animation/components/images-effects/image5/image5.component';
import { Image6Component } from './Css-animation/components/images-effects/image6/image6.component';

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
    LoginFormComponent,
    AlarmClockComponent,
    SnakeGameComponent,
    AnalogClockComponent,
    CurrencyConverterComponent,
    ToDoListComponent,
    TicTacToeComponent,
    CalculatorComponent,
    ColorSliderComponent,
    RecipeAppComponent,
    StopwatchComponent,
    AiImageGeneratorComponent,
    CaptchaGeneratorComponent,
    RegistrationFormComponent,

    AnimationsComponent,
    Button1Component,
    Button2Component,
    Button3Component,
    Button4Component,
    Button5Component,
    Button6Component,
    AllButtonsComponent,
    Button7Component,
    Button8Component,
    Button9Component,
    Button10Component,
    Button11Component,
    Button12Component,
    Button13Component,
    Button14Component,
    Button15Component,
    Button16Component,
    Button17Component,
    Button18Component,
    Button19Component,
    AllImagesComponent,
    Image1Component,
    Image2Component,
    Image3Component,
    Image4Component,
    Image5Component,
    Image6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
