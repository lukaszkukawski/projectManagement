/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {Projects} from '../../../collections/projects';

@Component({
    selector: 'project-list'
})
@View({
    templateUrl: 'client/projects/project-list/project-list.html',
    directives: [NgFor, RouterLink]
})
export class ProjectList {
    projects: Array<Object> = [];
    constructor(zone: NgZone) {
        console.log("Project list START");
        Tracker.autorun(() => zone.run(() => {
            this.projects = Projects.find().fetch();
        }));
    }
}