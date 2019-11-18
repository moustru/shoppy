import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';
import { WalletService } from 'src/app/shared/wallet.service';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ctx$: Observable<number>

  constructor(private cardsService: CardsService, private walletService: WalletService, private router: Router) {}

  ngOnInit() {
    // this.ctx$ = interval(100)
    // this.ctx$.subscribe(val => { this.count-- })
  }

}
