import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TotalCountPipe } from './pipes/total.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { GoodPageComponent } from './pages/good-page/good-page.component';
import { AddGoodComponent } from './components/add-good/add-good.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CartItemComponent,
    TotalCountPipe,
    SearchPipe,
    GoodPageComponent,
    AddGoodComponent,
    WalletComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
