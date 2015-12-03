/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {TopMenu} from '../../custom/top-menu/top-menu';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'project-details'
})
@View({
    templateUrl: 'client/projects/details/project-details.html',
    directives: [TopMenu, RouterLink]
})
export class ProjectDetails extends MeteorComponent{
    project: Project;
    constructor(params: RouteParams) {
        super();
        var projectId = params.get('projectId');
        this.subscribe('project', () => {
            this.project = Projects.findOne(projectId);
            //In this i have object correctly....
            console.log('this.project 1', this.project);
        }, true);
        //But in this project is undefined
        console.log("this.project 2", this.project);
    }
}