import {loadProjects} from './load_projects';
import './projects';
import './subjects';
import './answers';

Meteor.startup(loadProjects);