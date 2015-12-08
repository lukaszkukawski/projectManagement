/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf, NgZone} from 'angular2/angular2';
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
    projectId: string;
    project: Project;
    membersList: Member[];

    constructor(params: RouteParams, zone: NgZone) {
        super();
        this.projectId = params.get('projectId');
        //this.subscribe('project', () => {
        Tracker.autorun(() => zone.run(() => {
            this.project = Projects.findOne(this.projectId);
        }));
    }

    removeMember (member: Member){
        console.log(member);
        Projects.update(this.projectId, {
            $pull: {
                members: member
            }
        });
    }
}