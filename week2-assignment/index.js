import { todos as initialTodos } from './data/todos.js';

const todoList = document.getElementById('todo-list');
const allBtn = document.getElementById('filter-all');
const completedBtn = document.getElementById('filter-completed');
const uncompletedBtn = document.getElementById('filter-uncompleted');
const priorityButton = document.getElementById("priority-button");
const dropdown = document.getElementById("priority-options");

let todos = getTodos();

function getTodos() {
  const stored = localStorage.getItem("todos");
  if (stored) {
    return JSON.parse(stored);
  } else {
    localStorage.setItem("todos", JSON.stringify(initialTodos));
    return [...initialTodos];
  }
}

function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// todos 렌더링
function renderTodos(data) {
  const tbody = todoList.querySelector('tbody');
  tbody.innerHTML = '';

  data.forEach((todo) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" data-id="${todo.id}" /></td>
      <td>${todo.priority}</td>
      <td>${todo.completed ? '✅' : '❌'}</td>
      <td>${todo.title}</td>
    `;
    tbody.appendChild(tr);
  });

  // 전체 체크박스
  const toggleAllCheckbox = document.getElementById('toggle-all');
  toggleAllCheckbox.addEventListener('change', () => {
    const isChecked = toggleAllCheckbox.checked;
    const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = isChecked;
    });
  });

  todoList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.id !== 'toggle-all') {
      const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
      const checked = tbody.querySelectorAll('input[type="checkbox"]:checked');
      toggleAllCheckbox.checked = checkboxes.length === checked.length;
    }
  });
  const checkboxes = tbody.querySelectorAll('input[type="checkbox"]');
  const checked = tbody.querySelectorAll('input[type="checkbox"]:checked');
  toggleAllCheckbox.checked = checkboxes.length > 0 && checkboxes.length === checked.length;
}

// 필터 함수
allBtn.addEventListener('click', () => renderTodos(todos));

completedBtn.addEventListener('click', () => {
  const filtered = todos.filter((todo) => todo.completed);
  renderTodos(filtered);
});

uncompletedBtn.addEventListener('click', () => {
  const filtered = todos.filter((todo) => !todo.completed);
  renderTodos(filtered);
});

// 드롭다운
priorityButton.addEventListener("click", (e) => {
  dropdown.hidden = !dropdown.hidden;
  e.stopPropagation();
});

dropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedPriority = Number(e.target.dataset.value);
    const filtered = todos.filter((todo) => todo.priority === selectedPriority);
    renderTodos(filtered);
    dropdown.hidden = true;
  }
});

// 드롭다운 바깥 클릭 시 닫기
document.addEventListener('click', () => {
  dropdown.hidden = true;
});

// 할일 추가 
const form = document.querySelector("form");
const input = form.querySelector("input[type='text']");
const select = form.querySelector("select");

function getNextId() {
  const todos = getTodos();
  if (todos.length === 0) {
    return 1;
  }
  const maxId = Math.max(...todos.map(todo => todo.id));
  return maxId + 1;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = input.value.trim();
  const priority = select.value;

  // 유효성 검사
  if (!title || !["1", "2", "3"].includes(priority)) {
    alert("할 일과 중요도를 모두 입력해주세요!");
    return;
  }

  // 새 할 일 객체 생성
  const newTodo = {
    id: getNextId(),
    title,
    completed: false,
    priority: Number(priority),
  };

  // todos 배열에 추가하고 로컬 스토리지에 저장
  todos.push(newTodo);
  saveTodos(todos);

  // 다시 렌더링
  renderTodos(todos);

  input.value = "";
  select.selectedIndex = 0;
});

const deleteBtn = document.querySelector('.control-buttons button:nth-child(1)');
const completeBtn = document.querySelector('.control-buttons button:nth-child(2)');
const modal = document.getElementById('completed-modal');
const closeModalBtn = document.getElementById('close-modal');


deleteBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('#todo-list tbody input[type="checkbox"]:checked');
  if (checkboxes.length === 0) return;

  const idsToDelete = Array.from(checkboxes).map(cb => Number(cb.dataset.id));
  const updated = getTodos().filter(todo => !idsToDelete.includes(todo.id));
  saveTodos(updated);
  todos = updated;
  renderTodos(updated);
});

completeBtn.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('#todo-list tbody input[type="checkbox"]:checked');
  if (checkboxes.length === 0) return;

  const idsToComplete = Array.from(checkboxes).map(cb => Number(cb.dataset.id));
  const currentTodos = getTodos();

  const alreadyCompleted = currentTodos.some(todo =>
    idsToComplete.includes(todo.id) && todo.completed
  );

  if (alreadyCompleted) {
    modal.classList.add('show'); // show 클래스 붙이기
    return;
  }

  const updated = currentTodos.map(todo => {
    if (idsToComplete.includes(todo.id)) {
      return { ...todo, completed: true };
    }
    return todo;
  });

  saveTodos(updated);
  todos = updated;
  renderTodos(updated);
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // show 클래스 제거 = 숨김
});

// 초기 로드
const currentTodos = getTodos();
renderTodos(currentTodos);
