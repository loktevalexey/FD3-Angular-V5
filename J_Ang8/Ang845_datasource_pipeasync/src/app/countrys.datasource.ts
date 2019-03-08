import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class CountrysDatasource {

  constructor(private http:HttpClient) {
  }

  getObservable():Observable<Array<string>> {

    return <Observable<Array<string>>>this.http
      .get('http://fe.it-academy.by/Examples/net_city/countries.json')
      .pipe( map( (data:any) => { 
        let arr:Array<string>=[];
        data.rows.forEach( countryInfo => arr.push(countryInfo[1]) );
        return arr;
      } ) )
      ;

  }

}
