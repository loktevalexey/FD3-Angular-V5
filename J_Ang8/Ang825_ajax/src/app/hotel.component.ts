import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'hotel',
  templateUrl: 'hotel.component.html',
  styleUrls: ['hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotelName:string='California';

  private rooms:Array<{num:number,beds:number}>=[];

  private slogan:string='';

  private photo:string="http://fe.it-academy.by/Examples/Hotel/hotel1.jpg";

  constructor(private http1:HttpClient, 
    private http2:HttpClient) {
  }

  ngOnInit() {
    this.http1
      .get('http://fe.it-academy.by/Examples/Hotel/rooms.json')
      .subscribe( (data)=>{ 
        console.log(data); 
        this.rooms
          =<Array<{num:number,beds:number}>>data;
      } )
      ;
    this.http2
      .get('http://fe.it-academy.by/Examples/Hotel/slogan.txt', 
        {responseType: 'text'})
      .subscribe( (data)=>{ 
        console.log(data); 
        this.slogan=data;
      } )
      ;
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

  getSlogan():string {
    return this.slogan;
  };

}
