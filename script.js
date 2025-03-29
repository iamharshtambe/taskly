const todoList = [
   { name: 'do dinner', dueDate: '2025-3-29' },
   { name: 'do dance', dueDate: '2025-3-29' },
];

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
   const inputValue = inputElement.value;

   todoList.push(inputValue);

   renderTodos();

   inputElement.value = '';
}
