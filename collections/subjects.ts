/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/subject.d.ts" />

export var Subjects = new Mongo.Collection<Subject>('subjects');

Subjects.allow({
    insert: function(subject: Object) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(subject: Object, fields, modifier) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(subject: Object) {
        var user = Meteor.user();
        return !!user;
    }
});