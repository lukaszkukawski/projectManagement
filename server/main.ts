import {loadProjects} from './load_projects';
import './projects';
import './subjects';

Meteor.startup(loadProjects);