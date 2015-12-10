/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';
import {MeteorComponent} from 'angular2-meteor';
import {TopMenu} from '../../../custom/top-menu/top-menu';

@Component({
    selector: 'subject-details'
})
@View({
    templateUrl: 'client/projects/subjects/details/subject-details.html',
    directives: [NgIf, TopMenu]
})
export class SubjectDetails extends MeteorComponent {
    subject: Subject;
    projectId: string;
    subjectId: string;
    constructor(params: RouteParams) {
        super();
        console.log('SUbejct details START');
        this.projectId = params.get('projectId');
        this.subjectId = params.get('subjectId');
        this.subscribe('subjects', this.projectId, () => {
            this.subject = Subjects.findOne(this.subjectId);
            console.log('this.subject', this.subject);
        }, true);
    }
}