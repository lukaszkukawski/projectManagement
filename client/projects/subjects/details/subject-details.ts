/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';

@Component({
    selector: 'subject-details'
})
@View({
    templateUrl: 'client/subjects/details/subject-details.html',
    directives: [NgIf]
})
export class SubjectDetails {
    subject: Subject;
    constructor(params: RouteParams) {
        var projectId: string = params.get('projectId');
        var subjectId: string = params.get('subjectId');
        this.subject = Subjects.findOne(subjectId);
    }
}