 import {CreateTodo, CreateProject} from "./todos&projects"

 let defaultProject = new CreateProject ("Default");
 let listOfProjects = [defaultProject]  


 function updateDOM(nameOfProject){//FUNCTION TO GET THE PROPER PROJECT ON DOM

   document.getElementById("header").innerText = nameOfProject;
   let table = document.getElementById("tasks");
   table.innerHTML=" <tr><th>Task</th><th>Describtion</th><th>Notes</th><th>Priority</th><th>Status</th><th>Due Date</th></tr>"
   

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
            tdPriority.id = `priority${i}`;
            tdPriority.innerText=listOfProjects[x].todos[i].priority;
            
             
            let editBtn = document.createElement("button")
            editBtn.innerText="Edit";
            editBtn.addEventListener("click", function(){

               editBtn.style.visibility ="hidden"
               let newStatus = document.getElementById(`status${i}`);
               newStatus.innerHTML = `<select id="selectStatus${i}">
               <option value="Pending">Pending</option>
               <option value="Done">Done</option>               
               </select>`;
              

               let newPriority = document.getElementById(`priority${i}`);
               newPriority.innerHTML =`<select id="selectPriority${i}">
               <option value="High">High</option>
               <option value="Medium">Medium</option> 
               <option value="Low">Low</option>              
               </select>`
               

               let newDate = document.getElementById(`date${i}`);
               newDate.innerHTML =`<input type="date" id="newduedate${i}" name="duedate" placeholder="duedate">`
               
               
               
               
              // editBtn.innerText = "Apply Changes";
               let newButton = document.createElement("button");
               newButton.innerText = "Apply Changes";
               newButton.addEventListener("click", function(){
                  let newStatus = document.getElementById(`selectStatus${i}`).value
                  let newDueDate = document.getElementById(`newduedate${i}`).value
                  let newPriorityValue = document.getElementById(`selectPriority${i}`).value
                  //let valur = lostja.value;
                  
                  console.log(newStatus);
                  if (newStatus == "Done"){
                  listOfProjects[x].todos[i].status = true;
                  }

                  if (newStatus == "Pending"){
                     listOfProjects[x].todos[i].status = false;

                  }

                  listOfProjects[x].todos[i].dueDate = newDueDate;
                  listOfProjects[x].todos[i].priority = newPriorityValue;

                  updateDOM(nameOfProject);
               
               })

               tr.appendChild(newButton)
            })


                  
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText="Delete";
            deleteBtn.addEventListener("click", function(){
               let answer = window.confirm("Are you sure you want to delete this task?");

               if (answer){
               listOfProjects[x].todos.splice(i, 1);
               updateDOM(nameOfProject);
               }
            })

            
            let tdStatus = document.createElement("td");
            tdStatus.id = `status${i}`
            if (listOfProjects[x].todos[i].status==false){ 
               tdStatus.innerText ="Pending";
               
            }

            if (listOfProjects[x].todos[i].status==true){ 
               tdStatus.innerText ="Done";

            }


            /* let statusBox = document.createElement("button"); 
            if (listOfProjects[x].todos[i].status==false){ 
               statusBox.innerText ="Pending";
               statusBox.addEventListener("click", function(){
                  listOfProjects[x].todos[i].status = true
                  statusBox.innerText ="Done"
               })
            } 
            if (listOfProjects[x].todos[i].status==true){ 
               statusBox.innerText ="Done";
               statusBox.addEventListener("click", function(){
                  listOfProjects[x].todos[i].status = false
                  statusBox.innerText ="Pending"
               })
            }        
            
            tdStatus.appendChild(statusBox);
            */
            let tdDueDate = document.createElement("td"); 
            tdDueDate.id = `date${i}`          
            
            tdDueDate.innerText=listOfProjects[x].todos[i].dueDate;

           



            // INSERT NEW BUTTON FOR REMOVE OR EDIT DATE HERE?
            tr.appendChild(tdName);
            tr.appendChild(tdDescribtion);
            tr.appendChild(tdNotes);
            tr.appendChild(tdPriority);
            tr.appendChild(tdStatus);
            tr.appendChild(tdDueDate);
            tr.appendChild(editBtn);
            tr.appendChild(deleteBtn);
            
               
         
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
      <select id="priority">
               <option value="High">High</option>
               <option value="Medium">Medium</option> 
               <option value="Low">Low</option>              
      </select>
      <label for="lname">Due Date:</label>
      <input type="date" id="duedate" name="duedate" placeholder="duedate">
     
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

   if (name!=""){

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

   } else alert("Name of task cannot be left blank")
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
       newProject.className = "projects";
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