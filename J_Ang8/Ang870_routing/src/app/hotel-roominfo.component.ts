import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotelDatasource } from './hotel.datasource';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel-roominfo.component.html',
  styleUrls: ['hotel-roominfo.component.css']
})
export class HotelRoomInfoComponent {

  private roomNum:number;
  private room:{num:number,beds:number}=null;

  constructor(private datasource:HotelDatasource,
    activeRoute: ActivatedRoute) {
    this.roomNum=parseInt(
      activeRoute.snapshot.params['num']);
    this.room=datasource.getRooms()
      .filter(room=>(room.num==this.roomNum))[0];
  }

  getNum():number {
    return this.roomNum;
  }

  getRoom():{num:number,beds:number} {
    return this.room;
  };

  getPhoto():string {
    return this.datasource.getPhoto();
  };

}
