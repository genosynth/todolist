function CreateTodo(title,describtion,notes, priority, dueDate, checklist=false) {

	return{title, describtion, notes, priority, dueDate, checklist}


}

function CreateProject(name, todos=[]){

	return {name, todos}

}

export {CreateTodo, CreateProject}