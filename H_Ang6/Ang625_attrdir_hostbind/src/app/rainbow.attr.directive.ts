import { Directive, HostBinding } from "@angular/core"; 

@Directive({ 
  selector: "[rainbow]", 
}) 
export class RainbowDirective { 

  colors:Array<string>=['red','green','blue','cyan','magenta','yellow'];

  constructor() {
    setInterval( ()=>{ 
      this.setRandomColor() 
    },1500);
  } 

  // привязываем стилевое свойство хост-компонента (родителя)
  // к свойству класса hostBgColor
  @HostBinding("style.backgroundColor") 
  private hostBgColor:string;

  setRandomColor():void {
    let randomColorIndex:number
      =Math.floor(Math.random()*this.colors.length);
    let randomColor:string
      =this.colors[randomColorIndex];
    // меняем hostBgColor - меняется фоновый цвет хоста
    this.hostBgColor=randomColor;
  }

}
