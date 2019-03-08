import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class LikeEventsService {

  private events$:Subject<number>;

  constructor() {
    this.events$=new Subject<number>();
  }

  getSubject():Subject<number> {
    return this.events$;
  }

}
