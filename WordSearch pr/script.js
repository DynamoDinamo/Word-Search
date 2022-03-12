const taskInput = document.querySelector('#task__name');
const taskForm = document.querySelector('#task__adderPanel');
const taskCollection = document.querySelector('#collect');
const taskDeleteAll = document.querySelector('#delete__all');
const taskAlert = document.querySelector('.alert__ask');
const container = document.querySelector('.container');
const NO__Btn = document.querySelector('#no__btn')
const YES__Btn = document.querySelector('#yes__btn');


taskForm.addEventListener('submit', addTask);
 
function addTask(e) {
    if (taskInput.value === '') {
        alert("Please enter some text!")
    }
    else {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const a = document.createElement('a');
        a.innerHTML = '<i class="fas fa-times"></i>';
        a.className = "delete__action";
        p.appendChild(document.createTextNode(taskInput.value));
        li.appendChild(p);
        li.appendChild(a);
        li.className = "task";
        taskCollection.appendChild(li);
        taskInput.value = '';
        console.log(li);
        a.addEventListener('click', daleteTask);
        function daleteTask(e) {
            if (e.target.parentElement.classList.contains("delete__action")) {
                e.target.parentElement.parentElement.remove();
            }

        }
        taskDeleteAll.addEventListener('click', showAlert);
        function showAlert(e) {
            taskAlert.style.display = "flex";
            container.style.display = "none";
        }
        NO__Btn.addEventListener('click', hideAlert);
        function hideAlert() {
            taskAlert.style.display = "none";
            container.style.display = "flex";
        }
        YES__Btn.addEventListener('click', deleteAllTasks);
        function deleteAllTasks(){
            taskAlert.style.display = "none";
            container.style.display = "flex";
            // taskCollection.innerHTML = "";0 //Slower and not recommended
            while(taskCollection.firstChild){
                taskCollection.removeChild(taskCollection.firstChild)
            }//faster way of deleting items
        }

    }

    e.preventDefault();
}





