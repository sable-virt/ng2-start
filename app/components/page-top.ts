import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'page-top',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h2>{{title}}</h2>
        <a [routerLink]="['Next']">Next</a>
    `
})
export class PageTop {
    title = 'Page Top Title';
}