import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box';
import { CartListComponentComponent } from './components/cart-list-component/cart-list-component.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponentComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
