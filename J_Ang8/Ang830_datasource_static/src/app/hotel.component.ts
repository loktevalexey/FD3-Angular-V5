import { Component } from '@angular/core';

import { HotelDatasource } from './hotel.datasource';
import { IHotelInfo } from './IHotelInfo';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  hotelInfo:IHotelInfo=null;

  constructor(private datasource:HotelDatasource) {
    let info:IHotelInfo=datasource.get();
    console.log(info);
    this.hotelInfo=info;
  }

}
