import { Component, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent implements OnChanges {

  @Input("hotel-name")
  private hotelName:string;

  ngOnChanges(changes: {[property: string]: SimpleChange }) { 
    // получим изменения только свойства hotelName,
    // связанного с входным свойством
    let change:SimpleChange=changes["hotelName"];
    // SimpleChange содержит:                                        
    // currentValue - текущее значениесвойства
    console.log('атрибут hotel-name получил новое значение: '
      +change.currentValue);
  }

  getName():string {
    return this.hotelName;
  }

}
