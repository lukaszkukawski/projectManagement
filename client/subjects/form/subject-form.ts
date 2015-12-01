/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
import {Subjects} from '../../../collections/subjects';
import {RouteParams, Router} from 'angular2/router';
import {TopMenu} from '../../custom/top-menu/top-menu';

@Component({
    selector: 'subject-form'
})
@View({
    templateUrl: 'client/subjects/form/subject-form.html',
    directives: [FORM_DIRECTIVES, TopMenu]
})
export class SubjectForm {
    subjectForm: ControlGroup;
    projectId: string;
    constructor(fb: FormBuilder, params: RouteParams, private router: Router) {
        console.log('ProjectForm start');
        this.projectId = params.get('projectId');
        this.subjectForm = fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    addProject(subject) {
        if (this.subjectForm.valid) {
            Subjects.insert({
                title: subject.title,
                description: subject.description,
                owner: Meteor.userId(),
                projectId: this.projectId
            });
            this.router.navigate(['/ProjectList', { projectId: this.projectId}]);
        } else {

        }
    }
}