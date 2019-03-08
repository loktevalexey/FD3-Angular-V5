import { Component } from '@angular/core';

import { HotelDatasource } from './hotel.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel-photo.component.html',
  styleUrls: ['hotel-photo.component.css']
})
export class HotelPhotoComponent {

  constructor(private datasource:HotelDatasource) {
  }

  getPhoto():string {
    return this.datasource.getPhoto();
  };

}
