import addProjectToList from './addProjectToList';
import addTaskToList from './addTaskToList';
import renderTask from './renderTask';

function createProjectListeners() {
    const projectSubmitForm = document.querySelector(".projectSubmitForm");
    const Projects = document.getElementById("Projects")
    Projects.querySelector("input[id=projectForm]").addEventListener("click", (event)=>{
    projectSubmitForm.classList.toggle("show")
    });

    const projectSubmitButton = document.querySelector(".projectSubmitButton")
    projectSubmitButton.addEventListener("click", e => {
        e.preventDefault();
        addProjectToList.getValue();
        // this may also be where render gets executed or in addProjectToList
        });

    const projectCloseButton = document.querySelector(".projectCloseButton")
    projectCloseButton.addEventListener("click", e => {
        e.preventDefault();
        projectSubmitForm.classList.toggle("show")
        });

    const homeHeading = document.getElementById("Home")
    homeHeading.addEventListener("click", 
    function(){
        // console.log(addTaskToList.sortByAllTime)
        // renderTask (addTaskToList.sortByAllTime)
        alert("Home");
        });
    
    const todayHeading = document.getElementById("Today")
    todayHeading.addEventListener("click", function(){
        alert("Today");
        });

    const thisWeekHeading = document.getElementById("ThisWeek")
    thisWeekHeading.addEventListener("click", function(){
        alert("ThisWeek");
        });
    

    };

export default createProjectListeners;