import { Component } from '@angular/core';
import { LikeEventsService } from './like-events.service';

@Component({
  moduleId: module.id,
  selector: 'likes-buttons',
  templateUrl: 'likes-buttons.component.html',
  styleUrls: ['likes-buttons.component.css']
})
export class LikesButtonsComponent {

  constructor(private events:LikeEventsService) {
  }

  addLike():void {
    console.log('like');
    this.events.getSubject().next(1);
  }

  addDislike():void {
    console.log('dislike');
    this.events.getSubject().next(-1);
  }

}
