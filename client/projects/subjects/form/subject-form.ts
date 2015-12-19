/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, Input, Output, EventEmitter, AfterViewInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, Validators, NgIf, NgFor, AbstractControl} from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {PropertyForm} from '../../properties/form/property-form';
import {Properties} from '../../../../collections/properties';
import {PropertyList} from '../../properties/list/property-list';

@Component({
    selector: 'subject-form'
})
@View({
    templateUrl: 'client/projects/subjects/form/subject-form.html',
    directives: [FORM_DIRECTIVES, NgIf, PropertyForm, NgFor, PropertyList]
})
export class SubjectForm {
    @Input() template;
    @Output() complete = new EventEmitter();
    subjectForm: ControlGroup;
    projectId: string;
    templateProperty: boolean = false;
    constructor(fb: FormBuilder, params: RouteParams, private router: Router) {
        this.projectId = params.get('projectId');
        this.subjectForm = fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    addSubject(subject) {
        debugger
        if (this.subjectForm.valid) {
            var _id = Meteor.call('insertSubject', {
                title: subject.title,
                description: subject.description,
                owner: Meteor.userId(),
                projectId: this.projectId,
                response: 0
            });
            Meteor.call('projectIncChildren', this.projectId);
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

    addNewProperty() {
        this.templateProperty = true;
        console.log('this.templateProperty', this.templateProperty);
    }

    onCompletedAddedProperty(object) {
        this.templateProperty = object.templateProperty;
        if (object.propertyId) {
            this.subjectForm.addControl("property_" + object.propertyId, new Control());
        }
    }
}