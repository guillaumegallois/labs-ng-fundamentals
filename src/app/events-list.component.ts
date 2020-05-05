import { Component } from '@angular/core'
import { EventService } from './events.service'

@Component({
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styles: [`
    th, td { font-size: 16px; padding:5px 10px;}
  `]
})
export class EventsListComponent {
  constructor(private eventService:EventService) {

  }
  readonly events = this.eventService.getEvents()

}
