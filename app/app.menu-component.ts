import {Component} from '@angular/core';

@Component({
    selector: 'up-menu',
    styleUrls: ['./app/app.menu-component.css'],
    template: `
        <div id="mainMenuComponent">
            <span id="logo">illusion</span>
            <div id="menuButton" *ngFor="let i of menu" (mouseover)="mouseover($event)" (mouseout)="mouseout($event)">
                <div class="menuButtons"><span>{{i}}</span></div>
            </div>
        </div>`
})
export class AppMenuComponent {
    menu = [`Home`, `Pages`, `Portfolio`, `Blog`, `Features`, `Shortcodes`];

    mouseover(event) {
        if (event.target.tagName == `SPAN`) {
            event.target.style.color = `#9ADCED`
        }

    };

    mouseout(event) {
        if (event.target.tagName == `SPAN`) {
            event.target.style.color = ``
        }

    };

}