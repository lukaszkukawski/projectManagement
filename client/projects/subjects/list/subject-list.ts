/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {NgZone, Component, View, NgIf, NgFor} from 'angular2/angular2';
import {MeteorComponent} from 'angular2-meteor';
import {RouteParams, RouterLink} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';
@Component({
    selector: 'subject-list'
})
@View({
    templateUrl: 'client/projects/subjects/list/subject-list.html',
    directives: [NgFor]
})
export class SubjectList extends MeteorComponent{
    subject: Mongo.Cursor<Subject>;
    projectId: string;
    constructor(params: RouteParams) {
        super();
        this.projectId = params.get('projectId');
        this.subscribe('projects', () => {
            this.subject = Subjects.find(this.projectId);
        }, true);
    }
}