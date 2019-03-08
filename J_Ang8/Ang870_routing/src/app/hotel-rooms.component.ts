import { Component } from '@angular/core';

import { HotelDatasource } from './hotel.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel-rooms.component.html',
  styleUrls: ['hotel-rooms.component.css']
})
export class HotelRoomsComponent {

  constructor(private datasource:HotelDatasource) {
  }

  getRooms():Array<{num:number,beds:number}> {
    return this.datasource.getRooms();
  };

}
