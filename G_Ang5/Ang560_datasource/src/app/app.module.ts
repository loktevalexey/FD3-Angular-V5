import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelDatasource } from './hotel.datasource';

//let heartBreakHotel:HotelDatasource=new HotelDatasource();
//heartBreakHotel.setName("Heartbreak Hotel");

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HotelComponent, HotelTitleComponent
  ],
  providers: [
    // кто захочет HotelDatasource - можно, использовать один на всех объект 
    // класса HotelDatasource, он будет создан автоматически
    HotelDatasource,
    //{provide:HotelDatasource, useClass: HotelDatasource}, 
    // кто захочет HotelDatasource - можно, использовать один на всех объект heartBreakHotel
    //{provide:HotelDatasource, useValue: heartBreakHotel},
  ],
  bootstrap: [HotelComponent]
})
export class AppModule { }
