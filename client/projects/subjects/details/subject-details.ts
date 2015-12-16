/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {NgIf, NgSwitch} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';
import {MeteorComponent} from 'angular2-meteor';
import {AnswerForm} from '../answers/form/answer-form';
import {AnswerList} from '../answers/list/answer-list'

@Component({
    selector: 'subject-details'
})
@View({
    templateUrl: 'client/projects/subjects/details/subject-details.html',
    directives: [NgIf, AnswerForm, AnswerList, NgSwitch]
})
export class SubjectDetails extends MeteorComponent {
    subject: Subject;
    projectId: string;
    subjectId: string;
    currentTemplate: string = '';
    constructor(params: RouteParams) {
        super();
        console.log('Subject details START');
        this.projectId = params.get('projectId');
        this.subjectId = params.get('subjectId');
        this.subscribe('subjects', this.projectId, () => {
            this.subject = Subjects.findOne(this.subjectId);
            console.log('this.subject SubjectDetails', this.subject);
        }, true);
    }

    onCompletedAddedAnswer() {
        this.currentTemplate = '';
    }

    showFormAnswer() {
        this.currentTemplate = 'newAnswer';
    }
}