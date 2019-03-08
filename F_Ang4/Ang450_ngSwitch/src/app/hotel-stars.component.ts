import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css']
})
export class HotelStarsComponent {

  @Input("starsinput")
  private starsStr:string;

  getStarsStr():string {
    return this.starsStr;
  }

}
