import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h1>{{ helloText + ", " + getMyName() + "!" }}</h1>',
  styles: ['h1 { color: red }']
})
export class HelloComponent {

  helloText:string = 'Привет';

  getMyName():string {
    return "Васечкин";
  };

}
