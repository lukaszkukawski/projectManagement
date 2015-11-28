/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ProjectList} from './projects/project-list/project-list';
import {ProjectDetails} from './projects/project-details/project-details';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {TopMenu} from './custom/top-menu/top-menu';
import {ProjectForm} from './projects/project-form/project-form';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, TopMenu]
})
@RouteConfig([
    { path: '/', as: 'ProjectList', component: ProjectList },
    { path: '/project/:projectId', as: 'ProjectDetails', component: ProjectDetails },
    { path: '/project/new', as: "ProjectNew", component: ProjectForm}
])
class Management {
    constructor(){
        console.log("Management constructor");
    }
}

bootstrap(Management, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
