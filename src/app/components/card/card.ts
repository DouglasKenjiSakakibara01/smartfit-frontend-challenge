import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() card!: Location;

  constructor() { }

  ngOnInit(): void {
  }
}
