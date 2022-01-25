 import {addTodo, defaultProject, addProjectToDom,  listOfProjects, loadProjectIntoDom, updateDOM, loadProjectsFromLocalStorage} from "./dom"
 import {CreateProject} from "./todos&projects"

 
 loadProjectsFromLocalStorage();
 updateDOM("Default")
 addProjectToDom();
 

 document.getElementById("default-project").addEventListener("click", function() {updateDOM("Default")});





 //console.log(listOfProjects);
 
 

 

