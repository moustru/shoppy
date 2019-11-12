import { Component, Input } from '@angular/core';
import { WalletItem, WalletService } from 'src/app/shared/wallet.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: WalletItem[] = []

  constructor(private walletService: WalletService) { }
}
