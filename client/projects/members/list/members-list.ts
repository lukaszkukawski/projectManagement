/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Projects} from '../../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'members-list'
})
@View({
    templateUrl: 'client/projects/members/list/members-list.html',
    directives: [NgIf]
})
export class MembersList extends MeteorComponent {
    project: Project;
    membersList: Member[];

    constructor(params: RouteParams) {
        super();
        var projectId = params.get('projectId');
        this.subscribe('project', () => {
            this.project = Projects.findOne(projectId);
        }, true);
    }
}