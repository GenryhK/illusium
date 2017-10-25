import {Component} from '@angular/core';
import {Service} from "./service";
import {OnInit} from "@angular/core";

@Component({
    selector: 'app-center-component',
    styleUrls: ['./app/app.center-component.css'],
    template: `
        <div id="mainCenterComponent">
            <div class="menu" *ngFor="let i of menu" (mouseover)="mouseover($event)" (mouseout)="mouseout($event)">
                <span>{{i}}</span></div>
        </div>
        <div id="pictures">
            <div *ngFor="let k of images"><img src="{{k}}"/></div>
        </div>
        <foot></foot>`,
    providers: [Service]

})
export class AppCenterComponent implements OnInit {

    menu = [`All`, `3D`, `Illustration`, `Photography`, `Web`];
    images = [];
    test: boolean = true;

    mouseover(event) {
        if (event.target.tagName == `SPAN`) {
            event.target.parentNode.style.backgroundColor = `#41BEDD`;
            event.target.style.color = `white`
        }
    };

    mouseout(event) {
        if (event.target.tagName == `SPAN`) {
            event.target.parentNode.style.backgroundColor = ``;
            event.target.style.color = ``
        }
    };

    constructor(private _Service: Service) {
    };

    ngOnInit() {
        this.getImages()
    };

    getImages() {
        this._Service.getImage().then(images => this.images = images)
    };

}
