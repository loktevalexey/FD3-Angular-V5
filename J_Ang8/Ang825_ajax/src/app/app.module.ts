import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';

@NgModule({
  imports: [ BrowserModule, 
    FormsModule, HttpClientModule 
  ],
  declarations: [
    HotelComponent, HotelTitleComponent
  ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
