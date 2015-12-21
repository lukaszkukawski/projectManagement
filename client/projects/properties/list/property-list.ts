/// <reference path="../../../../typings/angular2-meteor.d.ts" />
import {Component, View, Input, AfterViewInit} from 'angular2/core';
import {NgFor, ControlGroup, Control} from 'angular2/common';
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
export class PropertyList extends MeteorComponent implements AfterViewInit {
    projectId: string;
    properties: Mongo.Cursor<Property>;
    @Input() subjectForm: ControlGroup;
    initControl: boolean = false;
    constructor(params: RouteParams) {
        super();
        this.projectId = params.get('projectId');
        console.log('PropertyList this.projectId', this.projectId);
        this.subscribe('properties', this.projectId, () => {
            this.properties = Properties.find();
            console.log('PropertyList this.properties', this.properties);
            this.ngAfterViewInit();
        }, true);
    }
    ngAfterViewInit() {
        if (this.initControl == false && this.properties) {
            this.initControl = true;
            var self = this;
            this.properties.forEach(function(err, doc) {
                self.subjectForm.addControl("property_" + err._id, new Control());
            });
        }
    }
    deleteProperty(property) {
        Meteor.call('deleteProperty', property);
    }
}