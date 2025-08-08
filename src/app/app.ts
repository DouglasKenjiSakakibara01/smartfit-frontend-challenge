import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Forms } from "./components/forms/forms";
import { BehaviorSubject, pipe } from 'rxjs';
import { CardsList } from "./components/cards-list/cards-list";
import { GetUnits } from './services/get-units';
import { Location } from './types/location.interface';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Forms, CardsList, AsyncPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitService : GetUnits) {}
  onSubmit() {
    this.showList.next(true);
    this.unitsList = this.unitService.getFilteredUnits();
  }
}
