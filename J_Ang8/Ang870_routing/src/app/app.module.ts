import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelPhotoComponent } from './hotel-photo.component';
import { HotelRoomComponent } from './hotel-room.component';
import { HotelRoomsComponent } from './hotel-rooms.component';
import { HotelRoomInfoComponent } from './hotel-roominfo.component';
import { HotelLinksComponent } from './hotel-links.component';
import { HotelDatasource } from './hotel.datasource';

// определяем маршруты
const appRoutes: Routes =[
    { path: '', component: HotelPhotoComponent},
    { path: 'rooms', component: HotelRoomsComponent},
    { path: 'room/:num', component: HotelRoomInfoComponent},
    // для всех остальных URL-ов:
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, 
    RouterModule.forRoot(appRoutes) ],
  declarations: [
    HotelComponent, HotelTitleComponent, 
    HotelPhotoComponent, HotelRoomInfoComponent,
    HotelRoomsComponent, HotelRoomComponent,
    HotelLinksComponent,
  ],
  providers: [ HotelDatasource ],
  bootstrap: [ HotelComponent ]
})
export class AppModule { }
