import { Component } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private cardsService: CardsService) { }
}
