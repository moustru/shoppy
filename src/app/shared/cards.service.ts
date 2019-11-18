import { Injectable } from "@angular/core";
import * as GOODS from './../data.json'

export interface Good {
    id: string,
    img: string,
    title: string,
    price: number,
    description?: string
}

@Injectable({ providedIn: 'root' })
export class CardsService {
    searchString: string = ''
    goods: Good[] = GOODS
}