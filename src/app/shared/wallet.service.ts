import { Injectable } from "@angular/core";
import { Good } from './cards.service';

export interface WalletItem extends Good {
    amount: number
}

@Injectable({ providedIn: 'root' })
export class WalletService {
    wallet: WalletItem[] = []
    showCart: boolean = false
    showModalAddGood: Boolean = false

    addToWallet(good: WalletItem, amount: number): void {
        this.showModalAddGood = true
        let addGood = this.wallet.find(x => x.id === good.id)

        if(addGood) {
            addGood.amount += amount
        } else {
            good.amount = amount
            this.wallet.push(good)
        }

        setTimeout(() => { this.showModalAddGood = false }, 1000)
    }

    removeFromWallet(id: string): void {
        let relatedGood = this.wallet.find(x => x.id === id)
        this.wallet.splice(this.wallet.indexOf(relatedGood), 1)
    }

    clearWallet(): void {
        this.wallet = []
    }

    toggleCart() {
        this.showCart = !this.showCart
    }
}