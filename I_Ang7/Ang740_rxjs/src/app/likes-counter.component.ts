import { Component } from '@angular/core';

import { LikeEventsService } from './like-events.service';

@Component({
  moduleId: module.id,
  selector: 'likes-counter',
  templateUrl: 'likes-counter.component.html',
  styleUrls: ['likes-counter.component.css']
})
export class LikesCounterComponent {

  private likesCounter:number=0;

  constructor(events:LikeEventsService) {
    events.getSubject()
      .subscribe( (like:number)=>{ this.nextLike(like); } )
      //.subscribe( this.nextLike.bind(this) )
      ;
  }

  nextLike(like:number):void {
    console.log('LikesCounterComponent: получен лайк '+like);
    this.likesCounter+=like;
  }

  getLikes():number {
    return this.likesCounter;
  }

}
