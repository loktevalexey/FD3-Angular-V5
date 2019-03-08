import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-slogan',
  templateUrl: 'hotel-slogan.component.html',
  styleUrls: ['hotel-slogan.component.css']
})
export class HotelSloganComponent {

  @Input("hotel-name")
  private hotelName:string;

  getName():string {
    return this.hotelName;
  }

}
