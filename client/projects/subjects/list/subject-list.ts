/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import {MeteorComponent} from 'angular2-meteor';
import {RouteParams, RouterLink} from 'angular2/router';
import {Subjects} from '../../../../collections/subjects';
@Component({
    selector: 'subject-list'
})
@View({
    templateUrl: 'client/projects/subjects/list/subject-list.html',
    directives: [NgFor, RouterLink]
})
export class SubjectList extends MeteorComponent{
    subjects: Mongo.Cursor<Subject>;
    projectId: string;
    constructor(params: RouteParams) {
        super();
        console.log('subject-list Start');
        this.projectId = params.get('projectId');
        this.subscribe('subjects', this.projectId, () => {
            this.subjects = Subjects.find();
            console.log('this.subjects', this.subjects);
        }, true);
    }

    removeSubject(subject: Subject) {
        Subjects.remove(subject._id);
    }
}