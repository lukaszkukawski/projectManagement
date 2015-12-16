/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Projects} from '../../../../collections/projects';
import {RouteParams, RouterLink} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'member-form'
})
@View({
    templateUrl: 'client/projects/members/form/member-form.html',
    directives: [FORM_DIRECTIVES]
})
export class MemberForm extends MeteorComponent {
    memberForm: ControlGroup;
    projectId: string;
    constructor(params: RouteParams) {
        super();
        this.projectId = params.get('projectId');
        var fb = new FormBuilder();
        this.memberForm = fb.group({
            email: ['', Validators.required]
        })
    }
    addMember(form) {
        if (this.memberForm.valid){
            console.debug("added member");
            Meteor.call('projectUpdate', this.projectId, {
                $push: {
                    members: {
                        status: 1,
                        email: form.email
                    }
                }
            });
            (<Control>this.memberForm.controls['email']).updateValue('');
        } else {
            console.debug("error emaila");
        }
    }
}