import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppBackgroundComponent} from "./app.background-component";
import {AppMenuComponent} from "./app.menu-component";
import {AppCenterComponent} from "./app.center-component";
import {AppFooterComponent} from "./app.footer-component";


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, AppBackgroundComponent, AppMenuComponent, AppCenterComponent, AppFooterComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
