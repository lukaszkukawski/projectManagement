/// <reference path="../typings/angular2-meteor.d.ts" />
 
import {FieldsForm} from '../collections/fieldsForm';

Meteor.publish('fieldsForm', function(projectId: string) {
    return FieldsForm.find({ projectId: projectId });
});