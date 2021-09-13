 import {CreateTodo, CreateProject} from "./todos&projects"

 function addTodo(){
     document.getElementById("add-task").addEventListener("click", function(){
        document.getElementById("add-task").style="visibility:hidden";
        document.getElementById("task-content").innerHTML = `<form style="padding: 2%" action="">
        <label for="fname">Task name:</label>
        <input type="text" id="tname" name="tname" placeholder="name">
        <label for="lname">Describtion:</label>
        <input type="text" id="describtion" name="describtion" placeholder="describtion">
        <label for="lname">Notes:</label>
        <input type="text" id="notes" name="notes" placeholder="notes">
        <label for="lname">Priority:</label>
        <input type="text" id="priority" name="priority" placeholder="priority">
        <label for="lname">Due Date:</label>
        <input type="text" id="duedate" name="duedate" placeholder="duedate">
       
      </form>`

      let btn = document.createElement("button");
      btn.innerText="Add Task";
      btn.addEventListener("click", createObjectFromDom)
      document.getElementById("task-content").appendChild(btn);
      
     })
 }

 function addProjectToDom(){
    document.getElementById("newProject").addEventListener("click", function(){
      document.getElementById("content").innerHTML = `<h1>New Project</h1>
     
      <label for="pname">Project Name:</label>
      <input type="text" id="pname" name="pname" placeholder="Name">`;

    let btn = document.createElement("button");
    btn.innerText="Add Project";
    btn.addEventListener("click", function(){
       let project = new CreateProject (document.getElementById("pname").value);
       listOfProjects.push(project);
       //console.log(listOfProjects)
       document.getElementById("content").innerHTML = `<h1>${document.getElementById("pname").value}</h1>`;
       let newProject = document.createElement("li");
       newProject.innerText = project.name
       document.getElementById("list-sidebar").appendChild(newProject);



    })
    document.getElementById("content").appendChild(btn);

    })
 }

 function createObjectFromDom(){

    let name = document.getElementById("tname").value
    let describtion = document.getElementById("describtion").value
    let notes = document.getElementById("notes").value
    let priority = document.getElementById("priority").value
    let dueDate = document.getElementById("duedate").value
    let todo1 = new CreateTodo(name,describtion,notes,priority,dueDate);
    
    console.log(todo1)
    defaultProject.todos.push(todo1)
    console.log(defaultProject)
    document.getElementById("task-content").innerHTML= "";
    document.getElementById("add-task").style="visibility:visible";
    updateDOM();


 }

function updateDOM(){

   let table = document.getElementById("tasks");
   let tr = document.createElement("tr");
   let tdName = document.createElement("td");
   tdName.innerText=defaultProject.todos[(defaultProject.todos.length-1)].title;
   let tdDescribtion = document.createElement("td");
   tdDescribtion.innerText=defaultProject.todos[(defaultProject.todos.length-1)].describtion;
   let tdNotes = document.createElement("td");
   tdNotes.innerText=defaultProject.todos[(defaultProject.todos.length-1)].notes;
   let tdPriority = document.createElement("td");
   tdPriority.innerText=defaultProject.todos[(defaultProject.todos.length-1)].priority;
   let tdChecklist = document.createElement("td");
   let inputCheckBox = document.createElement("input");   
   inputCheckBox.type="checkbox";  
   inputCheckBox.id="inputCheckBox";
   tdChecklist.appendChild(inputCheckBox);

   let tdDueDate = document.createElement("td");
   tdDueDate.innerText=defaultProject.todos[(defaultProject.todos.length-1)].dueDate;
   tr.appendChild(tdName);
   tr.appendChild(tdDescribtion);
   tr.appendChild(tdNotes);
   tr.appendChild(tdPriority);
   tr.appendChild(tdChecklist);
   tr.appendChild(tdDueDate);
      
   table.appendChild(tr);

}



 
 let defaultProject = new CreateProject ("Default");
 let listOfProjects = [defaultProject]  


 function loadProjectIntoDom(){ //This function loads the projects layout and propertie names
    let content = document.getElementById("content");
    content.innerHTML="";
    let h1 = document.createElement("h1");
    h1.innerText="title";
    let table = document.createElement("table");
    table.className= "taskTable";
    table.id ="tasks";
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.innerText="Task";
    let th2 = document.createElement("th");
    th2.innerText="Describtion";
    let th3 = document.createElement("th");
    th3.innerText="Notes";
    let th4 = document.createElement("th");
    th4.innerText="Priority";
    let th5 = document.createElement("th");
    th5.innerText = "Checklist";
    let th6 = document.createElement("th");
    th6.innerText="Due Date";
    let span=document.createElement("span");
    span.className="content-span";
    span.id="add-task";
    span.innerText="Add Task"
    let div = document.createElement("div");
    div.id="task-content";

    content.appendChild(h1);
    content.appendChild(table)
    table.appendChild(tr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    
    content.appendChild(span);
    content.appendChild(div);
    addTodo();
    
   defaultProject
 }

 export {addTodo, defaultProject, addProjectToDom,  listOfProjects, loadProjectIntoDom}