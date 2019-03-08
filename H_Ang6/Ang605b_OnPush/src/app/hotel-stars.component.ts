import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-stars',
  templateUrl: 'hotel-stars.component.html',
  styleUrls: ['hotel-stars.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelStarsComponent {

  @Input() public stars1:number;
  @Input() public stars2:{cnt:number};

  public stars3:{cnt:number}={cnt:33};

  inc3() {
    this.stars3.cnt++;
  }

}
