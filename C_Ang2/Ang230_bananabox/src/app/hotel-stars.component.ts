import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css']
})
export class HotelStarsComponent {

  @Input("stars")
  private stars:number;

  @Output("starsChange")
  private starsOutputEE=new EventEmitter<number>();

  getStars():number {
    return this.stars;
  }

  setStars(s:number):void {
    this.starsOutputEE.emit(s);
  }

}
