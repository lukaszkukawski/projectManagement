import {loadProjects} from './load_projects';
import './projects';

Meteor.startup(loadProjects);