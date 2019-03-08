import { Component, Input, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent implements OnInit {

  @Input("hotel-name")
  private hotelName:string;

  constructor(private logger:LoggerService) {
  }

  getName():string {
    return this.hotelName;
  }

  ngOnInit():void {
    this.logger.log("HotelTitleComponent init");
  }

}
