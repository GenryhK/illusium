"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.text = "Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. \n    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia. \n    Suspendisse sollicitudin velit sed leo. \nUt pharetra augue nec augue.Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. \n porta diam eu massa. Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget\n  tellus non erat lacinia fermentum.\n            Donec in velit vel ipsum auctor pulvinar. \n            Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. ";
    }
    AppFooterComponent = __decorate([
        core_1.Component({
            selector: 'foot',
            styleUrls: ['./app/app.footer-component.css'],
            template: "\n        <div id=\"mainFooter\">\n            <hr/>\n            <div id=\"q\">\n                <div id=\"aboutUs\"><span class=\"name\">Shortly About Us</span>\n                    <span>{{text}}</span></div>\n                <div id=\"contacts\"><span class=\"name\">Contact US</span>\n                    <div><img src=\"./img/phone.png\"/><span>phone:(123)-456-7890</span></div>\n                    <div><img src=\"./img/mail.png\"/><span>mail:nfo@companyname.com</span></div>\n                    <div><img src=\"./img/skype.png\"/><span>skype:skype.name</span></div>\n                </div>\n                <div id=\"saty\"><span class=\"name\">Stay Connected</span>\n                    <div><img src=\"./img/Facebook Icon.png\" alt=\"\"></div>\n                    <div><img src=\"./img/g+.png\" alt=\"\"></div>\n                    <div><img src=\"./img/Twitter icon.png\" alt=\"\"></div>\n                </div>\n            </div>\n        </div>"
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());
exports.AppFooterComponent = AppFooterComponent;
