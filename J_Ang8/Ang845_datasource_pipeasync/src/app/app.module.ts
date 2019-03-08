import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { HotelComponent } from './hotel.component';
import { CountrysDatasource } from './countrys.datasource';

@NgModule({
  imports: [ BrowserModule, 
    FormsModule, HttpClientModule 
  ],
  declarations: [
    HotelComponent
  ],
  providers: [ CountrysDatasource ],
  bootstrap: [HotelComponent]
})
export class AppModule { }
