import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from 'angular2/router';
import {PageTop} from './page-top';
import {PageNext} from './page-next';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
    `,
    styles: [
        `
            h1 { 
                font-weight: normal; 
                color: #009926;
            }
        `
    ],
})
@RouteConfig([
    {
        path: '/',
        name: 'Top',
        component: PageTop
    },
    {
        path: '/next',
        name: 'Next',
        component: PageNext
    }
])
export class MyApp {
    title = 'Page Title';
}