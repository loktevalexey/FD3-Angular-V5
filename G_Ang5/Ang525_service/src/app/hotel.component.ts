import { Component, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  private logger:LoggerService;

  constructor(_logger:LoggerService) {
    this.logger=_logger;
  }

  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };

  ngOnInit():void {
    this.logger.log("HotelComponent init");
  }

  like():void {
    this.logger.log("like!!!");
  }

}
