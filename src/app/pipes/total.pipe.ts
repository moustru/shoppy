import { Pipe } from "@angular/core";
import { WalletItem } from '../shared/wallet.service';

@Pipe({
    name: 'totalCount',
    pure: false
})

export class TotalCountPipe {
    transform(wallet: WalletItem[]): number {
        return wallet.map(x => x.price * x.amount).reduce((a, b) => a + b, 0)
    }
}