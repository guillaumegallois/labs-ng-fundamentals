import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  template: `
    <div>
      <h1>Congratulations!</h1>
      <h4>You got your component to display!</h4>
      <hr>
      <h5>How does your event look below?</h5>

      <div style="margin-top:30px">
        Event: {{event.name}}
      </div>
      <div>
        Date: {{event.date}}
      </div>
      <div>
        Time: {{event.time}}
      </div>
      <div>
        Address:
        <div>
          {{event.location.address}}
          {{event.location.city}}
          {{event.location.country}}
        </div>
      </div>
    </div>
  `,
})
export class EventDetailsComponent {
  readonly event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
