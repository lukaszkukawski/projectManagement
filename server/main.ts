import {loadProjects} from './load_projects';
import './projects';
import './subjects';
import './answers';
import './properties';

Meteor.startup(loadProjects);