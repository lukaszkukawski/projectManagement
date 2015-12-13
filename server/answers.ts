/// <reference path="../typings/angular2-meteor.d.ts" />
 
import {Answers} from '../collections/answers';

Meteor.publish('answers', function(subjectId: string) {
    return Answers.find({ subjectId: subjectId });
});

// Meteor.publish('project', function(projectId) {
//     return Projects.find(buildQuery.call(this, projectId));
// });


