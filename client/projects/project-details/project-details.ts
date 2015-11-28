/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'project-details'
})
@View({
    templateUrl: './projects/project-details/project-details.html',
    directives: []
})
export class ProjectDetails {
    constructor(params: RouteParams) {
        var projectId: string = params.get('projectId');
        console.log("projectId", projectId);
    }
}