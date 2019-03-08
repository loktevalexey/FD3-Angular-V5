import { Component } from '@angular/core';

import { HotelDatasource } from './hotel.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  constructor(private datasource:HotelDatasource) {
  }

  getName():string {
    return this.datasource.getName();
  };

}
