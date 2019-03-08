import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestMeComponent } from './testme.component';

@NgModule({
  declarations: [ TestMeComponent ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ TestMeComponent ]
})
export class AppModule { }
