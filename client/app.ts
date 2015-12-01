/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {ProjectList} from './projects/list/project-list';
import {ProjectDetails} from './projects/details/project-details';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {ProjectForm} from './projects/form/project-form';
import {SubjectDetails} from './subjects/details/subject-details';
import {SubjectForm} from './subjects/form/subject-form';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'ProjectList', component: ProjectList },
    { path: '/project/:projectId', as: 'ProjectDetails', component: ProjectDetails },
    { path: '/project/new', as: "ProjectNew", component: ProjectForm},
    { path: '/project/:projectId/subject/:subjectId', as: 'SubjectDetails', component: SubjectDetails },
    { path: '/project/:projectId/subject/new', as: 'SubjectForm', component: SubjectForm }
])
class Management {
    constructor(){
        console.log("Management constructor");
    }
}

bootstrap(Management, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
