/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/answer.d.ts" />

export var Answers = new Mongo.Collection<Answer>('answers');

Answers.allow({
    insert: function(answer: Object) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(answer: Object, fields, modifier) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(answer: Object) {
        var user = Meteor.user();
        return !!user;
    }
});