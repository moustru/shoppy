import { Pipe, PipeTransform } from "@angular/core";
import { Good } from '../shared/cards.service';

@Pipe({
    name: 'searchGoods'
})

export class SearchPipe implements PipeTransform {
    transform(catalog: Good[], search: string): Good[] {
        return catalog.filter(x => x.title.trim().toLowerCase().includes(search.trim().toLowerCase()))
    }
}