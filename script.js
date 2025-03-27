const todoList = [];

function renderTodos() {
   let todoListHtml = '';

   for (let i = 0; i < todoList.length; i++) {
      todoListHtml += `<p>${todoList[i]}</p>`;

      document.querySelector('.js-tasks').innerHTML = todoListHtml;
   }
}

function addTask() {
   const inputElement = document.querySelector('.js-input');
   const inputValue = inputElement.value;

   todoList.push(inputValue);

   renderTodos();

   inputElement.value = '';
}
