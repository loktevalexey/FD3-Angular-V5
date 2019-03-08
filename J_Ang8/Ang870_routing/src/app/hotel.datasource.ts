import { Injectable } from "@angular/core";

@Injectable()
export class HotelDatasource {

  private hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  getName():string {
    return this.hotelName;
  };

  setName(s:string):void {
    this.hotelName=s;
  };

  getRooms():Array<{num:number,beds:number}> {
    return this.rooms;
  };

  getPhoto():string {
    return this.photo;
  };

}
