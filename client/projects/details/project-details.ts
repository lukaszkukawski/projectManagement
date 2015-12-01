/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {TopMenu} from '../../custom/top-menu/top-menu';
import {Projects} from '../../../collections/projects';

@Component({
    selector: 'project-details'
})
@View({
    templateUrl: 'client/projects/details/project-details.html',
    directives: [TopMenu, RouterLink]
})
export class ProjectDetails {
    project: Project;
    constructor(params: RouteParams) {
        debugger
        var projectId: string = params.get('projectId');
        this.project = Projects.findOne(projectId);
        console.log("projectId", projectId);
    }
}