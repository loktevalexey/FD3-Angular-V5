import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelStarsComponent {

  constructor(/*private changeDetector:ChangeDetectorRef*/) {
    setInterval(()=>{
      this.stars3.cnt++;
      // if ( this.stars3.cnt%10===0 ) {
      //   this.changeDetector.detectChanges(); // обнаружить изменения в данном компоненте и его потомках
      // }
    },200)
  }

  private stars3:{cnt:number}={cnt:0};

  getCnt() {
    console.log("hotel-stars: вызван метод getCnt, вернёт "+this.stars3.cnt);
    return this.stars3.cnt;
  }

}
