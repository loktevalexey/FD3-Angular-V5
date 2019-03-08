import { Directive, ElementRef } from "@angular/core"; 

@Directive({ 
  selector: "[rainbow]", 
}) 
export class RainbowDirective { 

  colors:Array<string>=['red','green','blue','cyan','magenta','yellow'];

  constructor(private element: ElementRef) {

    this.setRandomColor();

    setInterval( ()=>{ 
      this.setRandomColor() 
    },2000);

  } 

  setRandomColor():void {
    let randomColorIndex:number
      =Math.floor(Math.random()*this.colors.length);
    let randomColor:string
      =this.colors[randomColorIndex];
    // element:ElementRef - это Ангуляр-обёртка для HTML-тега
    // element.nativeElement - это обычный DOM-элемент
    this.element.nativeElement
      .style.backgroundColor=randomColor;
  }

}
