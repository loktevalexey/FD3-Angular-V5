import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelStarsComponent } from './hotel-stars.component';
import { HotelRoomComponent } from './hotel-room.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HotelComponent, HotelTitleComponent, 
    HotelStarsComponent, HotelRoomComponent
  ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
