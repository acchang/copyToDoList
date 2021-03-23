import createUUID from './UUID';
import renderProject from './renderProject'

function Project(projectName, identifier) {
  this.projectName = projectName;
  this.identifier = identifier;
}

const addProjectToList = {
  projectList: [
      {
          "projectName": "a",
          "identifier": "b8d991cd-839c-4138-8b87-164caa3dbddf"
      },
      {
          "projectName": "b",
          "identifier": "2e9a220e-e8fd-4784-841f-b01d4fb7ed9c"
      },
      {
          "projectName": "c",
          "identifier": "f8c1426c-2e1b-470d-9466-a95d964f5d07"
      }  
  ],

  getValue: function() {
    const UUID = createUUID();
    const projectName = document.querySelector("#projectName").value;
    const addProject = new Project(projectName, UUID);
    this.projectList.push(addProject);
    // renderProject();
    renderProject(projectName, UUID);
    document.querySelector("#projectName").value = "";
    console.log(this.projectList)
  },
  deleteObject: function(UUID) {
    this.projectList = this.projectList.filter(object => object.identifier !== UUID);
    },
  changeProjectName: function(projectUUID, newProjectContainerText) {
    const index = this.projectList.findIndex((el) => el.identifier === projectUUID);
    this.projectList[index].projectName = newProjectContainerText;
    console.log(this.projectList)
    },
  createProjectPrefill: function(){
    renderProject(this.projectList);
  }  

}

export default addProjectToList;


