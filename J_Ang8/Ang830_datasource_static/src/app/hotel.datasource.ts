import { Injectable } from "@angular/core";

import { IHotelInfo } from './IHotelInfo';

@Injectable()
export class HotelDatasource {

  data:IHotelInfo={
    hotelName:'California',
    photo:"http://fe.it-academy.by/Examples/Hotel/hotel1.jpg"
  }

  get():IHotelInfo {
    return this.data;
  }

}
