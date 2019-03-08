import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { IHotelInfo } from './IHotelInfo';

@Injectable()
export class HotelDatasource {

  data:IHotelInfo={
    hotelName:'California',
    photo:"http://fe.it-academy.by/Examples/Hotel/hotel1.jpg"
  }

  getObservable():Observable<IHotelInfo> {
    return Observable.from([this.data]);
  }

}
