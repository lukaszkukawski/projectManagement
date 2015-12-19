/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {MeteorComponent} from 'angular2-meteor';
import {Properties} from '../../../../collections/properties';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'property-list'
})
@View({
    templateUrl: 'client/projects/properties/list/property-list.html',
    directives: [NgFor]
})
export class PropertyList extends MeteorComponent {
    projectId: string;
    properties: Mongo.Cursor<Property>;

    constructor(params: RouteParams) {
        super();
        this.projectId = params.get('projectId');
        console.log('PropertyList this.projectId', this.projectId);
        this.subscribe('properties', this.projectId, () => {
            this.properties = Properties.find();
            console.log('PropertyList this.properties', this.properties);
        }, true);
    }
    deleteProperty(property) {
        Meteor.call('deleteProperty', property);
    }
}