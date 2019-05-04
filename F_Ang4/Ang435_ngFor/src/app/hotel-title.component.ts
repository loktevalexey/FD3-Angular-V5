import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent {

  @Input("hotel-name")
  private hotelName:string;

  getName():string {
    return this.hotelName;
  }

}
