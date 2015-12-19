/// <reference path="../../../../typings/angular2-meteor.d.ts" />

import {Component, View, Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common'
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'property-form'
})
@View({
    templateUrl: 'client/projects/properties/form/property-form.html',
    directives: [FORM_DIRECTIVES]
})
export class PropertyForm {
    @Input() templateProperty;
    @Output() complete = new EventEmitter();
    propertyForm: ControlGroup;
    projectId: string;
    typeField: Object[] = [
        { symbol: 'input', name: 'input' }, 
        { symbol: 'text', name: 'text' },
        { symbol: 'html', name: 'html' },
        { symbol: 'radio', name: 'radio' },
        { symbol: 'checkbox', name: 'checkbox' },
        { symbol: 'date', name: 'date' },
        { symbol: 'select', name: 'select' }];
    constructor(params: RouteParams) {
        this.projectId = params.get('projectId');
        var fb = new FormBuilder;
        this.propertyForm = fb.group({
            type: ['', Validators.required],
            name: ['', Validators.required],
            placeholder: [],
            values: []
        });
    }
    addProperty(form) {
        var self = this;
        if (this.propertyForm.valid) {
            Meteor.call('addProperty', {
                type: form.type,
                name: form.name,
                placeholder: form.placeholder,
                values: "",
                projectId: this.projectId,
                owner: Meteor.userId()
            }, function(error, propertyId) {
                self.addPropertyCorectly(propertyId);
            });
        } else {
            console.log('Error when try add new property');
        }
    }
    addPropertyCorectly(propertyId: string) {
        this.complete.next({
            templateProperty: false,
            propertyId: propertyId
        });
    }
    cancelAdd() {
        this.complete.next({
            templateProperty: false
        });
    }
}
