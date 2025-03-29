const todoList = [];

function renderTodos() {
   let todoListHtml = '';

   todoList.forEach(function (todoObject, index) {
      const { name, dueDate } = todoObject;

      todoListHtml += `
      <p>
         ${name} ${dueDate} 
         <button class="delete-task">Delete</button>
      </p>
      `;
   });

   document.querySelector('.js-tasks').innerHTML = todoListHtml;

   document.querySelectorAll('.delete-task').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
         todoList.splice(index, 1);
         renderTodos();
      });
   });
}

document.querySelector('.add-task').addEventListener('click', () => {
   const inputElement = document.querySelector('.js-input');
   const name = inputElement.value;

   const dateElement = document.querySelector('.js-date');
   const dueDate = dateElement.value;

   todoList.push({ name, dueDate });

   renderTodos();

   inputElement.value = '';
   dateElement.value = '';
});
