import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-room',
  templateUrl: 'hotel-room.component.html',
  styleUrls: ['hotel-room.component.css']
})
export class HotelRoomComponent {

  @Input("num")
  private num:number;

  @Input("beds")
  private beds:number;

  getNum():number {
    return this.num;
  }

  getBeds():number {
    return this.beds;
  }

  getBedsArray():Array<number> {
    return new Array(this.beds);
  }

}
