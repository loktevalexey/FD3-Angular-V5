import { Directive, HostBinding, HostListener } from "@angular/core"; 

@Directive({ 
  selector: "[rainbow]", 
}) 
export class RainbowDirective { 

  colors:Array<string>
    =['red','green','blue','cyan','magenta','yellow'];

  // привязываем стилевое свойсто хост-компонента (родителя)
  // к свойству класса hostBgColor
  @HostBinding("style.backgroundColor") 
  private hostBgColor:string;

  // обработчиком события click у хост-компонента будет этот метод
  @HostListener("click")
  setRandomColor():void {
    let randomColorIndex:number
      =Math.floor(Math.random()*this.colors.length);
    let randomColor:string
      =this.colors[randomColorIndex];
    // меняем hostBgColor - меняется фоновый цвет хоста
    this.hostBgColor=randomColor;
  }

}
