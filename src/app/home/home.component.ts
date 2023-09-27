import { Component } from '@angular/core';
import { Project } from './projects.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  projects: Project[] = [
    { name: 'Digital Clock', route: 'digital-clock' },
    { name: 'Addition Game', route: 'addition-game' },
    { name: 'Learn Multiplication', route: 'multiplication-app' },
    { name: 'Rock Paper Scisscors', route: 'rock-paper-scisscors' },
    { name: 'Memory Game', route: 'memory-game' },
    { name: 'Sudoku', route: 'sudoku' },
    { name: 'Hangman', route: 'hangman' },
    { name: 'English Dictionary', route: 'english-dictionary' },
    { name: 'Dad Jokes Generator', route: 'dad-jokes' },
    { name: 'Country Guide', route: 'country-guide' },
    { name: 'Emoji Maker', route: 'emoji-maker' },
    { name: 'Whac-A-Mole', route: 'whac-a-mole' },
    { name: 'Guess The Number', route: 'guess-the-number' },
    { name: 'Pokemon Cards', route: 'pokemon-card' },
    { name: 'Alarm Clock', route: 'alarm-clock' },
    { name: 'Snake Game', route: 'snake-game' },
    { name: 'Analog Clock', route: 'analog-clock' },
    { name: 'Currency Converter', route: 'currency-converter' },
    { name: 'Tic Tac Toe', route: 'tic-tac-toe' },
    { name: 'Calculator', route: 'calculator' },
    { name: 'Color Slider', route: 'color-slider' },
    { name: 'Recipe App', route: 'recipe-app' },
    { name: 'Stopwatch', route: 'stopwatch' },
  ];
  filteredProjects = this.projects;

  InputValue = '';
  sortOrder = '';

  applySearchFilter() {
    let searchTerm = this.InputValue.toLowerCase();
    this.filteredProjects = this.projects.filter((project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
    this.sortProjects(this.sortOrder);
  }

  sortProjects(sortValue: string) {
    this.sortOrder = sortValue;
    if (this.sortOrder === 'atoZ') {
      this.filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'ztoA') {
      this.filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
}
