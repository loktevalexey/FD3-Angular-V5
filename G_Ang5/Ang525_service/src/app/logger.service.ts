import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {

  log(s:string):void {
    console.log("Logger::log - "+s);
  }

}
