import { Component, Input } from '@angular/core';
import { Good } from 'src/app/shared/cards.service';
import { WalletService } from 'src/app/shared/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() good: Good

  amount: number = 1
  constructor(private walletService: WalletService, private router: Router) {}

  amountPlus(): void {
    if(this.amount < 10) this.amount++
  }

  amountMinus(): void {
    if(this.amount > 1) this.amount--
  }
}
