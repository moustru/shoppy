import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodPageComponent } from './pages/good-page/good-page.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'good',
    children: [
      {
        path: ':id',
        component: GoodPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
