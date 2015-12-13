/// <reference path="../../../../../typings/angular2-meteor.d.ts" />
import {Component, View, NgIf, NgFor, NgZone} from 'angular2/angular2';
import {MeteorComponent} from 'angular2-meteor';
import {Answers} from '../../../../../collections/answers';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'answer-list'
})
@View({
    templateUrl: 'client/projects/subjects/answers/list/answer-list.html',
    directives: [NgFor, NgIf]
})
export class AnswerList extends MeteorComponent {
    answers: Mongo.Cursor<Answer>;
    subjectId: string;

    constructor(params: RouteParams, zone: NgZone) {
        super();
        console.log('Anwer List Start');
        this.subjectId = params.get('subjectId');
        console.log('this.subjectId', this.subjectId);
        //Tracker.autorun(() => zone.run(() => {
            this.subscribe('answers', this.subjectId, () => {
                this.answers = Answers.find();
                console.log('this.answers AnswerList', this.answers);
            });
        //}));
    }
}