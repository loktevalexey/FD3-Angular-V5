import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"stars",
  pure:true,
})
export class StarsPipe implements PipeTransform {

  transform(cnt:number):string {
    let s:string="";
    for ( let c:number=1; c<=cnt; c++ )
      s+="*";
    return s;
  }

}
