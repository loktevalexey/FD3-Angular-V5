import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { IHotelInfo } from './IHotelInfo';

@Injectable()
export class HotelDatasource {

  constructor(private http:HttpClient) {
  }

  getObservable():Observable<IHotelInfo> {

    return <Observable<IHotelInfo>>this.http
      .get('http://fe.it-academy.by/Examples/Hotel/hotelinfo.json');

  }

}
