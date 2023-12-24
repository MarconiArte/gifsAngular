import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "../../interfaces/gifs.interfaces";

@Component({
  selector:'app-card',
  templateUrl:'./card.component.html',
})

export class CardComponent implements OnInit{
  @Input() gif!: Gif[];

  ngOnInit(): void {

  }


}
