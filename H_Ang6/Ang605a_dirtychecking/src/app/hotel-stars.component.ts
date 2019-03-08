import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelStarsComponent {

  getStars():number {
    console.log("hotel-stars - вызван метод getStars");
    return 5;
  }

}
