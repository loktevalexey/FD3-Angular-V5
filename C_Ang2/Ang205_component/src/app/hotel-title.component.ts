import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent {

  private hotelName:string = 'California';

  getName():string {
    return this.hotelName;
  }

}
