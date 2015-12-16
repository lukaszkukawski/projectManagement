/// <reference path="../../../../../typings/angular2-meteor.d.ts" />
import {Component, View, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {Subjects} from '../../../../../collections/subjects';
import {Answers} from '../../../../../collections/answers';

@Component({
    selector: 'answer-form'
})
@View({
    templateUrl: 'client/projects/subjects/answers/form/answer-form.html',
    directives: [FORM_DIRECTIVES]
})
export class AnswerForm {
    @Output() complete = new EventEmitter();
    answerForm: ControlGroup;
    projectId: string;
    subjectId: string;
    constructor(fb: FormBuilder, params: RouteParams, private router: Router) {
        console.log('AnswerForm start');
        this.projectId = params.get('projectId');
        this.subjectId = params.get('subjectId');
        this.answerForm = fb.group({
            description: ['', Validators.required]
        });
    }

    addAnswer(answer) {
        if (this.answerForm.valid) {
            Meteor.call('answerInsert', {
                description: answer.description,
                type: 1,
                subjectId: this.subjectId,
                owner: Meteor.userId()
            });
            Meteor.call('subjectIncResponse', this.subjectId);
            console.log('EventEmitter change');
            this.complete.next("");
            //this.router.navigate(['/ProjectDetails', { projectId: this.projectId }]);
        } else {
            console.log('error with subject form');
        }
    }

    cancelAdd() {
        this.complete.next("");
    }
}