import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    HotelComponent, HotelTitleComponent
  ],
  providers: [LoggerService],
  bootstrap: [HotelComponent]
})
export class AppModule { }
