/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'project-list'
})
@View({
    templateUrl: 'client/projects/project-list/project-list.html',
    directives: [NgFor, RouterLink]
})
export class ProjectList extends MeteorComponent {
    projects: Array<Object> = [];
    constructor(zone: NgZone) {
        super();
        console.log("Project list START");
        this.subscribe('projects', () => {
            this.projects = Projects.find().fetch();
        }, true);

    }
}