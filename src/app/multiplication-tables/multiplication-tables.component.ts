import { Component } from '@angular/core';

@Component({
  selector: 'multiplication-tables',
  templateUrl: './multiplication-tables.component.html',
  styleUrls: ['./multiplication-tables.component.css'],
})
export class MultiplicationTablesComponent {
  multiplyer: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
