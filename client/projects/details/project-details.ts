/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View} from 'angular2/core';
import {NgIf, NgSwitch} from 'angular2/common';
import {RouteParams, RouterLink} from 'angular2/router';
import {Projects} from '../../../collections/projects';
import {MeteorComponent} from 'angular2-meteor';
import {MemberForm} from '../members/form/member-form';
import {MembersList} from '../members/list/members-list';
import {SubjectList} from '../subjects/list/subject-list';
import {SubjectForm} from '../subjects/form/subject-form';

@Component({
    selector: 'project-details'
})
@View({
    templateUrl: 'client/projects/details/project-details.html',
    directives: [RouterLink, NgIf, MemberForm, MembersList, SubjectList, NgSwitch, SubjectForm]
})
export class ProjectDetails extends MeteorComponent{
    project: Project;
    projectId: string;
    currentTemplate: string = "";
    properties: Mongo.Cursor<Property>;
    constructor(params: RouteParams) {
        super();
        console.log("Project Details construct");
        this.projectId = params.get('projectId');
        this.subscribe('project', () => {
            this.project = Projects.findOne(this.projectId);
        }, true);
    }
    showFormSubject() {
        this.currentTemplate = 'newTask';
    }
    onCompletedAddedSubject(newTemplate) {
        console.log('onCompletedAddedSubject');
        console.log('newTemplate', newTemplate);
        this.currentTemplate = newTemplate;
    }
}