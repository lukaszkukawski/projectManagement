/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouterLink} from 'angular2/router';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'project-list'
})
@View({
    templateUrl: 'client/projects/list/project-list.html',
    directives: [NgFor, RouterLink]
})
export class ProjectList extends MeteorComponent {
    projects: Mongo.Cursor<Project>;
    project: Project;
    constructor() {
        super();
        console.log("Project list START");
        this.subscribe('projects', () => {
            this.projects = Projects.find();
            console.log('this.projects', this.projects);
        }, true);

    }
}