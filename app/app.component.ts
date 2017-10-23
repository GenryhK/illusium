// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
import {Component} from '@angular/core';

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    selector: 'my-app',
    styleUrls:['./app/app.component.css'],
    template: '<main-background></main-background><up-menu></up-menu><app-center-component></app-center-component>' // HTML разметка определяющая представление текущего компонента
})

export class AppComponent {
} // Класс определяющий поведение компонента
