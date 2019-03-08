import { Component } from '@angular/core';
import { from } from 'rxjs/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent {

  constructor() {

    // создаём поток строк, в котором одна строка
    // создаём на его основе поток, задержанный на 3 сек
    // подписываемся на поток, и всё что прилетает в поток -
    // устанавливаем в качестве заголовка отеля
    from(['TITANIC']).delay(3000).subscribe( str => this.hotelName=str );
  }

  public hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[
    { num:22, beds:2 },
    { num:25, beds:1 },
    { num:28, beds:4 },
  ];

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

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
