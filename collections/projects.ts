/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/project.d.ts" />

export var Projects = new Mongo.Collection<Project>('projects');

Projects.allow({
    insert: function(project: Object) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(project: Object, fields, modifier) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(project: Object) {
        var user = Meteor.user();
        return !!user;
    }
});
Meteor.methods({
    projectIncChildren: function (projectId) {
        Projects.update(projectId, {
            $inc: {
                children: 1
            }
        });
    }
});