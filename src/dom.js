 import {CreateTodo, CreateProject} from "./todos&projects"

 let defaultProject = new CreateProject ("Default");
 let listOfProjects = [defaultProject]  


 function updateDOM(nameOfProject){//FUNCTION TO GET THE PROPER PROJECT ON DOM

   document.getElementById("header").innerText = nameOfProject;
   let table = document.getElementById("tasks");
   table.innerHTML=" <tr><th>Task</th><th>Describtion</th><th>Notes</th><th>Priority</th><th>Checklist</th><th>Due Date</th></tr>"
   

   for (let x=0; x<listOfProjects.length; x++){
      if (listOfProjects[x].name==nameOfProject){

         for (let i=0; i<listOfProjects[x].todos.length; i++){
            
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            tdName.innerText=listOfProjects[x].todos[i].title;
            let tdDescribtion = document.createElement("td");
            tdDescribtion.innerText=listOfProjects[x].todos[i].describtion;
            let tdNotes = document.createElement("td");
            tdNotes.innerText=listOfProjects[x].todos[i].notes;
            let tdPriority = document.createElement("td");
            tdPriority.innerText=listOfProjects[x].todos[i].priority;
            let tdChecklist = document.createElement("td");
            let inputCheckBox = document.createElement("input");   
            inputCheckBox.type="checkbox";  
            inputCheckBox.id="inputCheckBox";
            tdChecklist.appendChild(inputCheckBox);

            let tdDueDate = document.createElement("td");
            tdDueDate.innerText=listOfProjects[x].todos[i].dueDate;
            tr.appendChild(tdName);
            tr.appendChild(tdDescribtion);
            tr.appendChild(tdNotes);
            tr.appendChild(tdPriority);
            tr.appendChild(tdChecklist);
            tr.appendChild(tdDueDate);
               
         
            table.appendChild(tr);
         }
      } //return  
   } 
   addTodo();
   
}

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
    btn.addEventListener("click", createNewTask)
    document.getElementById("task-content").appendChild(btn);
    
   })
}

function createNewTask(){
   let nameOfProject = document.getElementById("header").innerText;
   let name = document.getElementById("tname").value
   let describtion = document.getElementById("describtion").value
   let notes = document.getElementById("notes").value
   let priority = document.getElementById("priority").value
   let dueDate = document.getElementById("duedate").value
   let todo1 = new CreateTodo(name,describtion,notes,priority,dueDate);

   for (let x=0; x<listOfProjects.length; x++){
      if (listOfProjects[x].name==nameOfProject){
         listOfProjects[x].todos.push(todo1)
      }
   }
         
   
   console.log(todo1)
   
   console.log(listOfProjects)
   document.getElementById("task-content").innerHTML= "";
   document.getElementById("add-task").style="visibility:visible";
   updateDOM(nameOfProject);


}




//----------------------------------- CODE BELOW IS WORKINGS -----------------------------------------------------








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
       console.log(listOfProjects)
       //document.getElementById("content").innerHTML = `<h1>${document.getElementById("pname").value}</h1>`;
       let newProject = document.createElement("li");
       newProject.id = (document.getElementById("pname").value)
       let name = newProject.id;
       newProject.addEventListener("click",loadProjectIntoDom(name))
       newProject.innerText = project.name
       document.getElementById("list-sidebar").appendChild(newProject);
       document.getElementById(newProject.id).addEventListener("click", function(){updateDOM(name)})



    })
    document.getElementById("content").appendChild(btn);

    })
 }





 function loadProjectIntoDom(nameOfProject){ //This function loads the projects layout and property names
    let content = document.getElementById("content");
    content.innerHTML="";
    let h1 = document.createElement("h1");
    h1.id="header";
    h1.innerText=nameOfProject; // IN THIS PART YOU GET THE HEADER OF THE PROJECT
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
    
   updateDOM(nameOfProject);
 }

 export {updateDOM, addTodo, defaultProject, addProjectToDom,  listOfProjects, loadProjectIntoDom}