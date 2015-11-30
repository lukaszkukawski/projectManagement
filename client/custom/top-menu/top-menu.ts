/// <reference path="../../../typings/angular2-meteor.d.ts" />
/// <reference path="../../../typings/meteor-accounts-ui.d.ts" />
/// <reference path="../../../typings/meteor-accounts.d.ts" />
import {Component, View, NgIf} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';
import {InjectUser} from 'meteor-accounts';

@Component({
    selector: 'top-menu'
})
@View({
    templateUrl: 'client/custom/top-menu/top-menu.html',
    directives: [RouterLink, AccountsUI, NgIf]
})
@InjectUser()
export class TopMenu {
    constructor() {
        console.log("TopMenu component start");
    }

    addNewProjectForm () {
        console.log("addNewProjectForm");
    }
}