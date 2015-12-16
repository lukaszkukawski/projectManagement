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

Meteor.methods({
    insertSubject: function (subject) {
        return Subjects.insert(subject);
    },
    subjectIncResponse: function(){
        Subjects.update(this.subjectId, {
            $inc: {
                response: 1
            }
        });
    },
    deleteSubject: function (subjectId: string) {
        Subjects.remove(subjectId);
    }
});