 import {addTodo, defaultProject, addProjectToDom,  listOfProjects, loadProjectIntoDom} from "./dom"
 import {CreateProject} from "./todos&projects"

 
 addTodo()
 addProjectToDom()

 document.getElementById("default-project").addEventListener("click", loadProjectIntoDom);


 console.log(listOfProjects);
 
 

 

