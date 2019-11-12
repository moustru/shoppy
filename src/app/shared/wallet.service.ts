import { Injectable } from "@angular/core";
import { Good } from './cards.service';

export interface WalletItem extends Good {
    amount: number
}

@Injectable({ providedIn: 'root' })
export class WalletService {
    wallet: WalletItem[] = []

    addToWallet(good: WalletItem, amount: number): void {
        let addGood = this.wallet.find(x => x.id === good.id)

        if(addGood) {
            addGood.amount += amount
        } else {
            good.amount = amount
            this.wallet.push(good)
        }
    }

    removeFromWallet(id: string): void {
        let relatedGood = this.wallet.find(x => x.id === id)
        this.wallet.splice(this.wallet.indexOf(relatedGood), 1)
    }

    clearWallet(): void {
        this.wallet = []
    }
}