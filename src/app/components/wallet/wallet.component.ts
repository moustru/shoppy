import { Component } from '@angular/core';
import { WalletService } from 'src/app/shared/wallet.service';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  constructor(private walletService: WalletService) { }
}
