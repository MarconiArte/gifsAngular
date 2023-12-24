import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-cart-list',
  templateUrl: './cart-list-component.component.html',
})
export class CartListComponentComponent {
  @Input()
  public gifs: Gif[] = [];
}
