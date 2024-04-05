let toDoList=JSON.parse(localStorage.getItem('toDoListStr')) ?? [];
displayTask();
function addTask(){
    let task={
        taskToDo: document.querySelector('#task-input').value.replace(/\s+/g, " "),
        date: document.querySelector('#date-input').value.replace(/\s+/g, " "),
    }
    if(task.taskToDo=='' || task.taskToDo==' '){
        alert("Task to likh bhai");
        return;
    }
    else{
        if(task.date==''){
            task.date='No date assigned';
        }
        toDoList.push(task);
        localStorage.setItem('toDoListStr',JSON.stringify(toDoList));
        document.querySelector('#task-input').value=''
        document.querySelector('#date-input').value='';
        displayTask();
    }   
}


function displayTask(){
    let currentList=document.querySelector('.added-task');
    let newHTML='';
    for(let i=0;i<toDoList.length;i++){
           newHTML+= `
           <span class="task-field"> ${toDoList[i].taskToDo}</span>
           <span class="date-field"> ${toDoList[i].date}</span>
           <button class="red" onclick="toDoList.splice(${i},1);displayTask();">Delete</button>
           `;
    }
    currentList.innerHTML=newHTML;
}

let today=new Date().toISOString().slice(0,10);
document.querySelector('#date-input').min=today;