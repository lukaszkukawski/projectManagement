/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View, NgIf} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {TopMenu} from '../../custom/top-menu/top-menu';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';
import {MemberForm} from '../members/form/member-form'
import {MembersList} from '../members/list/members-list'

@Component({
    selector: 'project-details'
})
@View({
    templateUrl: 'client/projects/details/project-details.html',
    directives: [TopMenu, RouterLink, NgIf, MemberForm, MembersList]
})
export class ProjectDetails extends MeteorComponent{
    project: Project;

    constructor(params: RouteParams) {
        super();
        var projectId = params.get('projectId');
        this.subscribe('project', () => {
            this.project = Projects.findOne(projectId);
        }, true);
    }
}