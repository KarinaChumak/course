import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'my-date-picker-simple-component',
    template: `
      <vaadin-date-picker label="Pick a date"></vaadin-date-picker>
      <vaadin-date-picker label="Birthday" [(value)]="birthday"></vaadin-date-picker>
    `,
    directives: [PolymerElement('vaadin-date-picker')]
})
export class DatePickerComponent {
    birthday = "2000-01-01";
}