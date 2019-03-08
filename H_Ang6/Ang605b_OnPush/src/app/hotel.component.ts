import { Component /*, ChangeDetectorRef, ApplicationRef*/ } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  //constructor(private changeDetector:ChangeDetectorRef) {
  //}
  //constructor(private appRef:ApplicationRef) {
  //}

  public stars1:number=11;
  public stars2:{cnt:number}={cnt:22};

  inc1() {
    this.stars1++;
  }

  inc2() {
    this.stars2.cnt++;

    // это здесь не сработает - входное свойство [stars2] же ещё не обновилось
    //this.appRef.tick();
    //this.changeDetector.detectChanges();
  }

  private hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  getName():string {
    return this.hotelName;
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

}
