import { todos as initialTodos } from './data/todos.js';

const todoList = document.getElementById('todo-list');
const allBtn = document.getElementById('filter-all');
const completedBtn = document.getElementById('filter-completed');
const uncompletedBtn = document.getElementById('filter-uncompleted');
const priorityButton = document.getElementById("priority-button");
const dropdown = document.getElementById("priority-options");
const form = document.querySelector("form");
const input = form.querySelector("input[type='text']");
const select = form.querySelector("select");
const deleteBtn = document.querySelector('.control-buttons button:nth-child(1)');
const completeBtn = document.querySelector('.control-buttons button:nth-child(2)');
const modal = document.getElementById('completed-modal');
const closeModalBtn = document.getElementById('close-modal');
const toggleAllCheckbox = document.getElementById('toggle-all');

const loadTodos = () => {
    const stored = localStorage.getItem("todos");
    if (stored) return JSON.parse(stored);
    localStorage.setItem("todos", JSON.stringify(initialTodos));
    return [...initialTodos];
};

let todos = loadTodos();

const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
};

const getNextId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

const getSelectedTodoIds = () => {
    return Array.from(todoList.querySelectorAll('tbody input[type="checkbox"]:checked'))
        .map(cb => Number(cb.dataset.id));
};

const updateToggleAllCheckbox = () => {
    const checkboxes = todoList.querySelectorAll('tbody input[type="checkbox"]');
    toggleAllCheckbox.checked = checkboxes.length && checkboxes.length === todoList.querySelectorAll('tbody input[type="checkbox"]:checked').length;
};

const addDragEvents = (row) => {
    row.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', row.dataset.index);
        setTimeout(() => row.style.opacity = '0.6', 0);
    });

    row.addEventListener('dragend', () => row.style.opacity = '');
    row.addEventListener('dragover', (e) => e.preventDefault());
    row.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const targetIndex = row.dataset.index;

        if (draggedIndex !== targetIndex) {
            const newTodos = [...todos];
            const dragged = newTodos.splice(draggedIndex, 1)[0];
            newTodos.splice(targetIndex, 0, dragged);

            todos = newTodos;
            saveTodos(todos);
            renderTodos(todos);
        }
    });
};

const renderTodos = (data) => {
    const tbody = todoList.querySelector('tbody');
    tbody.innerHTML = '';
    data.forEach((todo, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('draggable', 'true');
        tr.dataset.index = index;

        tr.innerHTML = `
            <td><input type="checkbox" data-id="${todo.id}" /></td>
            <td>${todo.priority}</td>
            <td>${todo.completed ? '✅' : '❌'}</td>
            <td>${todo.title}</td>
        `;

        addDragEvents(tr);
        tbody.appendChild(tr);
    });

    updateToggleAllCheckbox();
};

const handleAddTodo = (e) => {
    e.preventDefault();

    const title = input.value.trim();
    const priority = select.value;

    if (!title || !["1", "2", "3"].includes(priority)) {
        alert("할 일과 중요도를 모두 입력해주세요!");
        return;
    }

    const newTodo = {
        id: getNextId(),
        title,
        completed: false,
        priority: Number(priority),
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodos(todos);

    input.value = "";
    select.selectedIndex = 0;
};

const handleDelete = () => {
    const selectedIds = getSelectedTodoIds();
    if (selectedIds.length === 0) return;

    todos = todos.filter(todo => !selectedIds.includes(todo.id));
    saveTodos(todos);
    renderTodos(todos);
};

const handleComplete = () => {
    const selectedIds = getSelectedTodoIds();
    if (selectedIds.length === 0) return;

    const alreadyCompleted = todos.some(todo =>
        selectedIds.includes(todo.id) && todo.completed
    );

    if (alreadyCompleted) {
        modal.classList.add('show');
        return;
    }

    todos = todos.map(todo =>
        selectedIds.includes(todo.id) ? { ...todo, completed: true } : todo
    );

    saveTodos(todos);
    renderTodos(todos);
};

renderTodos(todos);

allBtn.addEventListener('click', () => renderTodos(todos));
completedBtn.addEventListener('click', () => renderTodos(todos.filter(todo => todo.completed)));
uncompletedBtn.addEventListener('click', () => renderTodos(todos.filter(todo => !todo.completed)));

priorityButton.addEventListener("click", (e) => {
    dropdown.hidden = !dropdown.hidden;
    e.stopPropagation();
});

dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedPriority = Number(e.target.dataset.value);
        renderTodos(todos.filter(todo => todo.priority === selectedPriority));
        dropdown.hidden = true;
    }
});

document.addEventListener('click', () => dropdown.hidden = true);

form.addEventListener("submit", handleAddTodo);
deleteBtn.addEventListener('click', handleDelete);
completeBtn.addEventListener('click', handleComplete);
closeModalBtn.addEventListener('click', () => modal.classList.remove('show'));

toggleAllCheckbox.addEventListener('change', () => {
    const checkboxes = todoList.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = toggleAllCheckbox.checked);
});

todoList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.id !== 'toggle-all') {
        updateToggleAllCheckbox();
    }
});