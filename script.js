function addTask() {
    const title = document.getElementById('taskTitle').value;
    const desc = document.getElementById('taskDescription').value;
    const originalString = document.getElementById('container').innerHTML;
    document.getElementById('container').innerHTML = originalString + `
     <div class="task"> 
         <div>Title of Task: ${title}</div> 
         <div>Description of Task: ${desc}</div>
         <button id = "rea" onclick="markAsDone(this)">Mark as Done</button>   
     </div>`;
}

function markAsDone(button) {
    const taskDiv = button.parentElement;
    const titleDiv = taskDiv.querySelector('div');
    titleDiv.style.textDecoration = 'line-through';
    
}
