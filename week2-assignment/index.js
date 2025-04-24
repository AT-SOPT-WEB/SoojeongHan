import { todos } from './data/todos.js';

const todoList = document.getElementById('todo-list');
const allBtn = document.getElementById('filter-all');
const completedBtn = document.getElementById('filter-completed');
const uncompletedBtn = document.getElementById('filter-uncompleted');
const priorityButton = document.getElementById("priority-button");
const dropdown = document.getElementById("priority-options");

// 로컬 스토리지에서 todos 불러오기
function getTodos() {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    return JSON.parse(storedTodos);
  }
  localStorage.setItem("todos", JSON.stringify(todos)); 
  return todos;
}

// 로컬 스토리지에 todos 저장하기
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 할 일 렌더링
function renderTodos(data) {
  const tbody = todoList.querySelector('tbody');
  tbody.innerHTML = ''; // 기존 내용을 지우고 새로 갱신

  data.forEach((todo) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" ${todo.completed ? 'checked' : ''} /></td>
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
}

// 필터 함수들
allBtn.addEventListener('click', () => renderTodos(currentTodos));

completedBtn.addEventListener('click', () => {
  const filtered = currentTodos.filter((todo) => todo.completed);
  renderTodos(filtered);
});

uncompletedBtn.addEventListener('click', () => {
  const filtered = currentTodos.filter((todo) => !todo.completed);
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

  // 입력창 초기화
  input.value = "";
  select.selectedIndex = 0;
});

// 초기 로드
const currentTodos = getTodos();
renderTodos(currentTodos);
