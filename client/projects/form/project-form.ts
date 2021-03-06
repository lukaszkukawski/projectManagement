/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, NgForm} from 'angular2/common';
import {Projects} from '../../../collections/projects';
import {Router} from 'angular2/router';

@Component({
    selector: 'project-form'
})
@View({
    templateUrl: 'client/projects/form/project-form.html',
    directives: [FORM_DIRECTIVES]
})
export class ProjectForm {
    projectForm: ControlGroup;
    constructor(fb: FormBuilder, private router: Router) {
        console.log('ProjectForm start');

        this.projectForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            img: ['']
        });
    }

    addProject(project) {
        if (this.projectForm.valid) {
            Meteor.call('projectInsert', {
                name: project.name,
                description: project.description,
                img: project.img,
                children: 0,
                owner: Meteor.userId(),
                members: []
            });
            this.router.navigate(['/ProjectList']);
        } else{

        }
    }
}