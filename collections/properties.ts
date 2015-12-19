/// <reference path="../typings/angular2-meteor.d.ts" />
/// <reference path="../typings-custom/property.d.ts" />

export var Properties = new Mongo.Collection<Property>('properties');

Properties.allow({
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
    addProperty: function(field: Property) {
        return Properties.insert(field);
    },
    updateProperty: function(id, updateObject) {
        Properties.update(id, updateObject);
    },
    deleteProperty: function(property: Property) {
        Properties.remove(property);
    }
});