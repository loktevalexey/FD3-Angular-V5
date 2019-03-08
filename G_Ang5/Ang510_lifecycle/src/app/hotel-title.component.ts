import { Component, Input, SimpleChange, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked 
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hotel-title',
  templateUrl: 'hotel-title.component.html',
  styleUrls: ['hotel-title.component.css']
})
export class HotelTitleComponent implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input("hotel-name")
  private hotelName:string;

  getName():string {
    return this.hotelName;
  }

  ngOnInit():void {
    console.log("HotelTitleComponent::ngOnInit");
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }):void {
    console.log("HotelTitleComponent::ngOnChanges");
  }

  ngDoCheck():void {
    console.log("HotelTitleComponent::ngDoCheck");
  }

  ngAfterContentInit():void {
    console.log("HotelTitleComponent::ngAfterContentInit");
  }

  ngAfterContentChecked():void {
    console.log("HotelTitleComponent::ngAfterContentChecked");
  }

  ngAfterViewInit():void {
    console.log("HotelTitleComponent::ngAfterViewInit");
  }

  ngAfterViewChecked():void {
    console.log("HotelTitleComponent::ngAfterViewChecked");
  }

}
