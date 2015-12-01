/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';
import {TopMenu} from '../../custom/top-menu/top-menu';

@Component({
    selector: 'project-list'
})
@View({
    templateUrl: 'client/projects/list/project-list.html',
    directives: [NgFor, RouterLink, TopMenu]
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