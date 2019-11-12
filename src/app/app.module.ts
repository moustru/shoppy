import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { TotalCountPipe } from './pipes/total.pipe';
import { GoodPageComponent } from './pages/good-page/good-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    CartItemComponent,
    TotalCountPipe,
    GoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
