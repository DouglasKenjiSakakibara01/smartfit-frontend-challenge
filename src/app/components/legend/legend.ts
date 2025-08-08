import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-legend',
  imports: [CommonModule],
  templateUrl: './legend.html',
  styleUrl: './legend.scss'
})
export class Legend {
  constructor() { }

  ngOnInit(): void {
  }

}
