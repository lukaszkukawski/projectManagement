/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/meteor-accounts-ui.d.ts" />
/// <reference path="../../../typings/meteor-accounts.d.ts" />
import {Component, View} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {RouterLink, Router} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';

@Component({
    selector: 'top-menu'
})
@View({
    templateUrl: 'client/custom/top-menu/top-menu.html',
    directives: [RouterLink, AccountsUI, NgIf]
})
export class TopMenu {
    user: Object;
    constructor(private router: Router) {
        console.log("TopMenu component start");
        //this.router.navigate(['/ProjectList']);
        console.log('userId', Meteor.userId());
        this.user = Meteor.user();
    }

    addNewProjectForm () {
        console.log("addNewProjectForm");
    }
}