 import {addTodo, defaultProject, addProjectToDom,  listOfProjects, loadProjectIntoDom, updateDOM} from "./dom"
 import {CreateProject} from "./todos&projects"

 
 //addTodo()
 //addProjectToDom()
 updateDOM("Default")
 addProjectToDom();

 document.getElementById("default-project").addEventListener("click", function() {updateDOM("Default")});





 console.log(listOfProjects);
 
 

 

