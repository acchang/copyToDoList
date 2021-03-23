import createTaskInput from '../createTaskInput';
createTaskInput();

import createTaskListener from './createTaskListener';
createTaskListener();

import createProjectListeners from '../createProjectListeners';
createProjectListeners();

import addTaskToList from '../addTaskToList';
addTaskToList.createTaskPrefill();
let prefillTasks = addTaskToList.taskList
import renderTask from '../renderTask';
renderTask(prefillTasks)

import addProjectToList from '../addProjectToList';
let prefillProjects = addProjectToList.projectList

import renderProject from '../renderProject';
renderProject(prefillProjects[0].projectName, prefillProjects[0].identifier)
renderProject(prefillProjects[1].projectName, prefillProjects[1].identifier)
renderProject(prefillProjects[2].projectName, prefillProjects[2].identifier)

// use below to test if changes coming through.
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['check', 'webpack'], ' ');
    return element;
  }
document.body.appendChild(component());

