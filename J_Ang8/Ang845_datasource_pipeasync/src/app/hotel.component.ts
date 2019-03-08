import { Component } from '@angular/core';
import { Observable } from "rxjs";

import { CountrysDatasource } from './countrys.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  countrys:Observable<Array<string>>=null;

  constructor(private countrysDS:CountrysDatasource) {
    this.countrys=countrysDS.getObservable();
  }

}
