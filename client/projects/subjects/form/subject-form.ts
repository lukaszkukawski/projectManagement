/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, Input, Output, EventEmitter, CORE_DIRECTIVES} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
import {RouteParams, Router} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';
import {Projects} from '../../../../collections/projects';

@Component({
    selector: 'subject-form'
})
@View({
    templateUrl: 'client/projects/subjects/form/subject-form.html',
    directives: [CORE_DIRECTIVES]
})
export class SubjectForm {
    @Input() template;
    @Output() complete = new EventEmitter();
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

    addSubject(subject) {
        if (this.subjectForm.valid) {
            Subjects.insert({
                title: subject.title,
                description: subject.description,
                owner: Meteor.userId(),
                projectId: this.projectId,
                response: 0
            });
            Projects.update(this.projectId, {
                $inc: { 
                    children: 1
                }
            });
            console.log('EventEmitter change');
            this.complete.next("");
            //this.router.navigate(['/ProjectDetails', { projectId: this.projectId }]);
        } else {
            console.log('error with answer form');
        }
    }

    cancelAdd(){
        this.complete.next("");
    }
}