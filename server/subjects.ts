/// <reference path="../typings/angular2-meteor.d.ts" />
 
import {Subjects} from '../collections/subjects';

Meteor.publish('subjects', function(projectId: string) {
    return Subjects.find({ projectId: projectId });
});

// Meteor.publish('project', function(projectId) {
//     return Projects.find(buildQuery.call(this, projectId));
// });


