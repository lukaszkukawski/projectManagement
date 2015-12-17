/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/fieldForm.d.ts" />

export var FieldsForm = new Mongo.Collection<FieldForm>('fieldsForm');

FieldsForm.allow({
    insert: function(formField) {
        var user = Meteor.user();
        return !!user;
    },
    update: function(formField, fields, modifier) {
        var user = Meteor.user();
        return !!user;
    },
    remove: function(formField) {
        var user = Meteor.user();
        return !!user;
    }
});
Meteor.methods({
    addField: function(field: FieldForm) {
        FieldsForm.insert(field);
    },
    fieldUpdate: function(id, updateObject) {
        FieldsForm.update(id, updateObject);
    }
});