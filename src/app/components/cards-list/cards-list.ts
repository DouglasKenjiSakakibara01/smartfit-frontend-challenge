import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';

@Component({
  selector: 'app-cards-list',
  imports: [CommonModule, Card],
  templateUrl: './cards-list.html',
  styleUrl: './cards-list.scss'
})
export class CardsList {
  @Input() unitsList: Location[] = [];

  constructor() {}

  ngOnInit(): void {}

}
