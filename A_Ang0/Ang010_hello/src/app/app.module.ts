import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloComponent } from './hello.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    HelloComponent
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
