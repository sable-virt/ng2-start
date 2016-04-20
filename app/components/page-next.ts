import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'page-next',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h2>{{title}}</h2>
        <a [routerLink]="['Top']">Top</a>
    `
})
export class PageNext {
    title = 'Page Next Title';
}