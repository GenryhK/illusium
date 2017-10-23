"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent() {
        this.menu = ["Home", "Pages", "Portfolio", "Blog", "Features", "Shortcodes"];
    }
    AppMenuComponent.prototype.mouseover = function (event) {
        if (event.target.tagName == "SPAN") {
            event.target.style.color = "#9ADCED";
        }
    };
    ;
    AppMenuComponent.prototype.mouseout = function (event) {
        if (event.target.tagName == "SPAN") {
            event.target.style.color = "";
        }
    };
    ;
    AppMenuComponent = __decorate([
        core_1.Component({
            selector: 'up-menu',
            styleUrls: ['./app/app.menu-component.css'],
            template: "\n        <div id=\"mainMenuComponent\">\n            <span id=\"logo\">illusion</span>\n            <div id=\"menuButton\" *ngFor=\"let i of menu\" (mouseover)=\"mouseover($event)\" (mouseout)=\"mouseout($event)\">\n                <div class=\"menuButtons\"><span>{{i}}</span></div>\n            </div>\n        </div>"
        })
    ], AppMenuComponent);
    return AppMenuComponent;
}());
exports.AppMenuComponent = AppMenuComponent;
//# sourceMappingURL=app.menu-component.js.map