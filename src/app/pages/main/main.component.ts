import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/shared/cards.service';
import { WalletService } from 'src/app/shared/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showCart: boolean = false

  constructor(private cardsService: CardsService, 
              private walletService: WalletService,
              private router: Router) {}

  toggleCart() {
    this.showCart = !this.showCart
  }

  ngOnInit() {
  }

}
