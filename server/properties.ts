/// <reference path="../typings/angular2-meteor.d.ts" />
 
import {Properties} from '../collections/properties';

Meteor.publish('properties', function(projectId: string) {
    return Properties.find({ projectId: projectId });
});