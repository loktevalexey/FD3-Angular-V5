import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css']
})
export class HotelStarsComponent {

  @Input("starsinput")
  private stars:number;

  @Output("starsoutput")
  private starsOutputEE=new EventEmitter<number>();

  getStars():number {
    return this.stars;
  }

  setStars(s:number):void {
    this.starsOutputEE.emit(s);
  }

}
