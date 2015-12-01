/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/subject.d.ts" />

export var Subjects = new Mongo.Collection<Subject>('subjects');

Subjects.allow({
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