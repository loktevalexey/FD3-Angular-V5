import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core"; 

@Directive({ 
  selector: "[rainbow]", 
}) 
export class RainbowDirective implements AfterViewInit { 

  colors:Array<string>
    =['red','green','blue','cyan','magenta','yellow'];

  @Input("rainbow")
  private startColor:string;

  constructor(private element: ElementRef) {

    // к этому моменту startColor ещё не готов

    setInterval( ()=>{ 
      this.setRandomColor() 
    },2000);
  } 

  ngAfterViewInit():void {
    
    // к этому моменту startColor уже готов

    this.element.nativeElement
      .style.backgroundColor=this.startColor;
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
