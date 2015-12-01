/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/angular2';
import {Projects} from '../../../collections/projects';
import {Router} from 'angular2/router';
import {TopMenu} from '../../custom/top-menu/top-menu';

@Component({
    selector: 'project-form'
})
@View({
    templateUrl: 'client/projects/form/project-form.html',
    directives: [FORM_DIRECTIVES, TopMenu]
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
            Projects.insert({
                name: project.name,
                description: project.description,
                img: project.img,
                children: 0,
                owner: Meteor.userId()
            });
            this.router.navigate(['/ProjectDetails']);
        } else{

        }
    }
}