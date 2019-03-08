import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent {

  @Input("hotel-name")
  private hotelName:string;

  @Output("like-add")
  private likeAdd:EventEmitter<number>=new EventEmitter<number>();

  @Output("like-reset")
  public likeReset:EventEmitter<void>=new EventEmitter<void>();

  constructor() {
    setInterval(()=>{
      this.likeAdd.emit(5);
      },1000);
  }

  getName():string {
    return this.hotelName;
  }

}
