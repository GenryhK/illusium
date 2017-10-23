"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("./service");
var AppCenterComponent = /** @class */ (function () {
    function AppCenterComponent(_Service) {
        this._Service = _Service;
        this.menu = ["All", "3D", "Illustration", "Photography", "Web"];
        this.images = [];
        this.test = true;
    }
    AppCenterComponent.prototype.mouseover = function (event) {
        if (event.target.tagName == "SPAN") {
            event.target.parentNode.style.backgroundColor = "#41BEDD";
            event.target.style.color = "white";
        }
    };
    ;
    AppCenterComponent.prototype.mouseout = function (event) {
        if (event.target.tagName == "SPAN") {
            event.target.parentNode.style.backgroundColor = "";
            event.target.style.color = "";
        }
    };
    ;
    ;
    AppCenterComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    ;
    AppCenterComponent.prototype.getImages = function () {
        var _this = this;
        this._Service.getImage().then(function (images) { return _this.images = images; });
    };
    ;
    AppCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-center-component',
            styleUrls: ['./app/app.center-component.css'],
            template: "\n        <div id=\"mainCenterComponent\">\n            <div class=\"menu\" *ngFor=\"let i of menu\" (mouseover)=\"mouseover($event)\" (mouseout)=\"mouseout($event)\">\n                <span>{{i}}</span></div>\n        </div>\n        <div id=\"pictures\">\n            <div *ngFor=\"let k of images\"><img src=\"{{k}}\"/></div>\n        </div>",
            providers: [service_1.Service]
        }),
        __metadata("design:paramtypes", [service_1.Service])
    ], AppCenterComponent);
    return AppCenterComponent;
}());
exports.AppCenterComponent = AppCenterComponent;
//# sourceMappingURL=app.center-component.js.map