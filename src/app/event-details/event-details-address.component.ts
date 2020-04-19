import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-details-address',
  templateUrl: 'event-details-address.component.html'
})
export class EventDetailsAddressComponent {
  @Input() location:any
}
