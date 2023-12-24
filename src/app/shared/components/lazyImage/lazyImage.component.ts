import { Component, Input } from "@angular/core";

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html'
})

export class LazyImageComponent{

  @Input({required: true}) url!: string;

  @Input() alt: string = '';

  hasLoaded: boolean = false;

  onLoad() {
    this.hasLoaded = true;
  }
}
