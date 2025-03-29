const todoList = [];

function renderTodos() {
   let todoListHtml = '';

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const { name, dueDate } = todoObject;

      todoListHtml += `
      <p>
         ${name} ${dueDate} 
         <button onclick='
            todoList.splice(${i}, 1);
            renderTodos();
         '>Delete</button>
      </p>
      `;
   }

   document.querySelector('.js-tasks').innerHTML = todoListHtml;
}

function addTask() {
   const inputElement = document.querySelector('.js-input');
   const name = inputElement.value;

   const dateElement = document.querySelector('.js-date');
   const dueDate = dateElement.value;

   todoList.push({ name, dueDate });

   renderTodos();

   inputElement.value = '';
   dateElement.value = '';
}
