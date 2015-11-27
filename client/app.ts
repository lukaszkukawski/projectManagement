/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ProjectList} from './projects/project-list/project-list';
import {ProjectDetails} from './projects/project-details/project-details';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, ProjectList]
})
@RouteConfig([
    { path: '/projectList', as: 'ProjectList', component: ProjectList },
    { path: '/project/:partyId', as: 'ProjectDetails', component: ProjectDetails }
])
class Management {
    constructor(){
        console.log("Management constructor");
    }
}

bootstrap(Management, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
