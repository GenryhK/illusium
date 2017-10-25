import {Component} from '@angular/core';


@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
    template: `
        <main-background></main-background>
        <up-menu></up-menu>
        <app-center-component></app-center-component>
    `
})

export class AppComponent {
}
