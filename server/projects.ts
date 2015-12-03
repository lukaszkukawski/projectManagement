/// <reference path="../typings/angular2-meteor.d.ts" />
 
import {Projects} from '../collections/projects';

function buildQuery(projectId?: string): Object {
    var isAvailable = {
        $or: [
            {
                $and: [
                    { owner: this.userId },
                    { owner: { $exists: true } }
                ]
            }
        ]
    };

    if (projectId) {
        return { $and: [{ _id: projectId }, isAvailable] };
    }

    return isAvailable;
}

Meteor.publish('projects', function() {
    return Projects.find(buildQuery.call(this));
});

Meteor.publish('project', function(projectId) {
    return Projects.find(buildQuery.call(this, projectId));
});
