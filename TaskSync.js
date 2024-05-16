
let taskList = [];
let taskListHtml = '';

function addTask()
{
    let task =  document.getElementById('task-name');
    let date = document.getElementById('date');
    let time = document.getElementById('time');

    let toDo = `<span class="col-lg-6 col-md-5 col-sm-5">${task.value}</span><span class="col-lg-3 col-md-3 col-sm-3">${date.value}</span><span class="col-lg-2 col-md-2 col-sm-2">${time.value}</span>`;

    
    if (task.value=== ""){
        task.focus();
    } else if (date.value === "")
    {
        date.focus();
    }
    else if (time.value === "")
    {
        time.focus();
    } else
    {
        taskList.push(toDo);
    
        updateTaskList();
    
        task.value = "";
        date.value ="";
        time.value ="";
    }
}



function updateTaskList()
{
    taskListHtml = '';
    for (let i =0; i < taskList.length; i++)
    {
        taskListHtml += `
            <div class="todo row">
                ${taskList[i]} 
                <button class="btn btn-success col-lg-1 col-md-2 col-sm-2" onclick="removeTask(${i})">Remove</button>
            </div>
        `
    }
    document.querySelector('.task-list').innerHTML = taskListHtml;
   

}

function removeTask(index)
{
    taskList.splice(index, 1);
    updateTaskList();
}

function keyPressHandler(event)
{
    if (event.key === 'Enter')
   {
       addTask();
   }
}