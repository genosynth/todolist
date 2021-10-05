function CreateTodo(title,describtion,notes, priority, dueDate, status=false) {

	return{title, describtion, notes, priority, dueDate, status}


}

function CreateProject(name, todos=[]){

	return {name, todos}

}

export {CreateTodo, CreateProject}