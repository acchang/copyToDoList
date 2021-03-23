import addTaskToList from './addTaskToList';
import addProjectToList from './addProjectToList';
import renderTask from './renderTask';
import { wasm } from 'webpack';

function createTaskInput() {
    let taskOverallContainer = document.createElement("div");
    taskOverallContainer.setAttribute("class", "taskOverallContainer");
    taskOverallContainer.setAttribute("id", "taskOverallContainer");
    document.getElementById('taskProjectHolder').appendChild(taskOverallContainer);
  
    let taskInputContainer = document.createElement("div");
    taskInputContainer.setAttribute("class", "taskInputContainer");
    taskInputContainer.setAttribute("id", "taskInputContainer");
    document.getElementById('taskOverallContainer').appendChild(taskInputContainer);
    createTaskPriorityField();
    createTaskField();
    createTaskCalendarField();
    createTaskNotesField();
    createTaskProjectField();
    createAddTaskField();
    console.log(addTaskToList.taskList)
  };

  function createTaskPriorityField() {
    let taskPrioritySection = document.createElement("span");
    taskPrioritySection.setAttribute("id", "taskPrioritySection");
    taskPrioritySection.setAttribute("Class", "taskPrioritySection");
    document.getElementById('taskInputContainer').appendChild(taskPrioritySection);
  
    let taskPriorityButton = document.createElement("button");
    taskPriorityButton.setAttribute("id", "taskPriorityButton");
    taskPriorityButton.innerText = "Priority ";
    document.getElementById('taskPrioritySection').appendChild(taskPriorityButton);
  
    let taskPriorityIcon = document.createElement("span") 
    taskPriorityIcon.setAttribute("class", "glyphicon glyphicon-sort");
    document.getElementById("taskPriorityButton").appendChild(taskPriorityIcon);
  
    taskPriorityButton.addEventListener("click", function(event){ 
        taskPrioritySelector.classList.toggle("flex")
    });
  
    let taskPrioritySelector = document.createElement("select");
    taskPrioritySelector.setAttribute("class", "taskPrioritySelector");
    taskPrioritySelector.setAttribute("id", "taskPrioritySelector");
    document.getElementById('taskPrioritySection').appendChild(taskPrioritySelector);

    let taskPriorityOne = document.createElement("option");
    taskPriorityOne.setAttribute("value", "High");
    taskPriorityOne.innerText = "High";
    document.getElementById("taskPrioritySelector").appendChild(taskPriorityOne);
  
    let taskPriorityTwo = document.createElement("option");
    taskPriorityTwo.setAttribute("value", "Medium");
    taskPriorityTwo.innerText = "Medium";
    document.getElementById("taskPrioritySelector").appendChild(taskPriorityTwo);
  
    let taskPriorityThree = document.createElement("option");
    taskPriorityThree.setAttribute("value", "Low");
    taskPriorityThree.innerText = "Low";
    document.getElementById("taskPrioritySelector").appendChild(taskPriorityThree);
  
    let taskPriorityFour = document.createElement("option");
    taskPriorityFour.setAttribute("value", "Done");
    taskPriorityFour.innerText = "Done";
    document.getElementById("taskPrioritySelector").appendChild(taskPriorityFour);

    document.getElementById("taskPrioritySelector").value= "Medium";
  };


function createTaskField() {
    let taskInputFieldHolder = document.createElement("span");
    taskInputFieldHolder.setAttribute("id", "taskInputFieldHolder");
    document.getElementById('taskInputContainer').appendChild(taskInputFieldHolder);
  
    let taskInputField = document.createElement("input");
    taskInputField.setAttribute("id", "taskInputField");
    taskInputField.setAttribute("type", "text");
    taskInputField.setAttribute("maxlength", "60");
    taskInputField.setAttribute("size", "60");
    taskInputField.setAttribute("placeholder", "Add task name here");
    taskInputField.classList.add("task-input");
    document.getElementById('taskInputFieldHolder').appendChild(taskInputField);
  };


function createTaskCalendarField() {
    let taskCalendarField = document.createElement("span");
    taskCalendarField.setAttribute("id", "taskCalendarField");
    taskCalendarField.textContent = "Due: "
    document.getElementById('taskInputContainer').appendChild(taskCalendarField);
  
    let taskCalendarSelector = document.createElement("input");
    taskCalendarSelector.setAttribute("id", "taskCalendarSelector");
    taskCalendarSelector.setAttribute("type", "date");
    document.getElementById('taskCalendarField').appendChild(taskCalendarSelector);
  }
  
function createTaskNotesField() {
    let taskNotesField = document.createElement("span");
    taskNotesField.setAttribute("id", "taskNotesField");
    taskNotesField.setAttribute("Class", "taskNotesField");
    document.getElementById('taskInputContainer').appendChild(taskNotesField);
  
      let taskNotesButton = document.createElement("button");
      taskNotesButton.setAttribute("id", "taskNotesButton");
      taskNotesButton.innerText = "Notes: ";
      document.getElementById('taskNotesField').appendChild(taskNotesButton);
  
        let taskNotesIcon = document.createElement("span") 
        taskNotesIcon.setAttribute("class", "glyphicon glyphicon-edit");
        document.getElementById("taskNotesButton").appendChild(taskNotesIcon);
  
    let taskNotesInput = document.createElement("div");
    taskNotesInput.setAttribute("class", "taskNotesInput");
    taskNotesInput.setAttribute("id", "taskNotesInput");
    document.getElementById('taskOverallContainer').appendChild(taskNotesInput);
    taskNotesInput.innerText = "Additional info: ";
  
    let taskNotesBox = document.createElement("textarea");
    taskNotesBox.setAttribute("id", "taskNotesBox");
    taskNotesBox.setAttribute("placeholder", "Add notes here");
    document.getElementById('taskNotesInput').appendChild(taskNotesBox);
  
    taskNotesButton.addEventListener("click", function(event){ 
    taskNotesInput.classList.toggle("flex")
    })
  };
  
function createTaskProjectField() {
    let taskProjectSection = document.createElement("span");
    taskProjectSection.setAttribute("id", "taskProjectSection");
    taskProjectSection.setAttribute("Class", "taskProjectSection");
    document.getElementById('taskInputContainer').appendChild(taskProjectSection);
  
    let taskProjectButton = document.createElement("button");
    taskProjectButton.setAttribute("id", "taskProjectButton");
    taskProjectButton.innerText = "Project ";
    document.getElementById('taskProjectSection').appendChild(taskProjectButton);
  
    let taskProjectIcon = document.createElement("span") 
    taskProjectIcon.setAttribute("class", "glyphicon glyphicon-folder-open");
    document.getElementById("taskProjectButton").appendChild(taskProjectIcon);
  
    let taskProjectSelector = document.createElement("select");
    taskProjectSelector.setAttribute("id", "taskProjectSelector");
    taskProjectSelector.setAttribute("class", "taskProjectSelector");
    document.getElementById('taskProjectSection').appendChild(taskProjectSelector);
  
    taskProjectButton.addEventListener("click", function(event){       
      taskProjectSelector.classList.toggle("flex");
      renewOptions(taskProjectSelector);
      let listOfProjects = addProjectToList.projectList;
      let i;
      for (i = 0; i < listOfProjects.length; i++) {        
        let taskProjectOption = document.createElement("option");
        taskProjectOption.setAttribute("id", listOfProjects[i].identifier);
        taskProjectOption.setAttribute("value", listOfProjects[i].identifier);
        taskProjectOption.innerText = listOfProjects[i].projectName;
        document.getElementById("taskProjectSelector").appendChild(taskProjectOption);

        let taskProjectTitleSpace = document.getElementById('projectHeadline');
        let taskProjectTitle = taskProjectTitleSpace.textContent;

        if (taskProjectTitle === '' || taskProjectTitle === null || taskProjectTitle === undefined) {
            console.log("no headline")
        }
        else {
          const projectIndex = addProjectToList.projectList.findIndex((el) => el.projectName === taskProjectTitle);
          let taskProjectIdentifier = addProjectToList.projectList[projectIndex].identifier
          let taskProjectCurrentTitle = addProjectToList.projectList.find(x => x.identifier === taskProjectIdentifier).projectName;
          if (taskProjectOption.innerText === taskProjectCurrentTitle)
          {document.getElementById(taskProjectIdentifier).selected = "true"}}
        }
      })
};

function renewOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
  };

function createAddTaskField() {
    let addTaskField = document.createElement("span");
    addTaskField.setAttribute("id", "addTaskField");
    document.getElementById('taskInputContainer').appendChild(addTaskField);
  
    let addTaskButton = document.createElement("button");
    addTaskButton.setAttribute("id", "addTaskButton");
    addTaskButton.innerText = "Add ";
    document.getElementById('addTaskField').appendChild(addTaskButton);
  
    let addTaskIcon = document.createElement("span") 
    addTaskIcon.setAttribute("class", "glyphicon glyphicon-plus-sign");
    document.getElementById("addTaskButton").appendChild(addTaskIcon);
  
    addTaskButton.addEventListener("click", function(event){
      addTaskToList.getValue();

      // remove after and render depending on what's in headline field
      
      // Was: renderTask(addTaskToList.taskList);

      renderTask(addTaskToList.sortByAllTime)

    })
  };

export default createTaskInput;