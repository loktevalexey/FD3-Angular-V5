import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HotelComponent } from './hotel.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    HotelComponent
  ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
