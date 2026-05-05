const STORAGE_KEY = 'todo_app_v1';
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
let currentFilter = 'all';

// DOM refs
const todoInput = document.getElementById('todo-input');
const prioritySel = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const statsLabel = document.getElementById('stats-label');
const progressFill = document.getElementById('progress-fill');
const clearDoneBtn = document.getElementById('clear-done');
const dateLabel = document.getElementById('date-label');

// Date
dateLabel.textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
});

// Save
function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Escape HTML
function esc(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Render
function render() {
    const visible = todos.filter(t =>
        currentFilter === 'all' ? true :
            currentFilter === 'done' ? t.done :
                !t.done
    );

    const doneCount = todos.filter(t => t.done).length;
    const total = todos.length;
    const pct = total ? Math.round((doneCount / total) * 100) : 0;

    progressFill.style.width = pct + '%';
    statsLabel.textContent = `${doneCount}/${total} done`;

    todoList.innerHTML = '';

    if (!visible.length) {
        todoList.innerHTML = `
        <li class="empty-state text-center py-10 text-gray-400">
          <div class="text-4xl mb-3 opacity-30">✓</div>
          <p class="text-sm">
            ${currentFilter === 'done' ? 'No completed tasks yet.' :
                currentFilter === 'active' ? 'Nothing left to do!' :
                    'Add your first task above.'}
          </p>
        </li>`;
        return;
    }

    visible.forEach(t => {
        const li = document.createElement('li');
        li.className = `todo-item flex items-center gap-3 px-4 py-3 rounded-xl border
        border-gray-100 bg-white hover:border-violet-100 transition-all
        ${t.done ? 'done' : ''}`;
        li.dataset.id = t.id;

        const badgeClass =
            t.priority === 'high' ? 'badge-high' :
                t.priority === 'med' ? 'badge-med' : 'badge-low';
        const badgeLabel =
            t.priority === 'high' ? 'High' :
                t.priority === 'med' ? 'Med' : 'Low';

        li.innerHTML = `
        <button class="check-btn" title="Toggle done">
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <polyline points="2,6 5,9 10,3" stroke="#fff" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span class="todo-text flex-1 text-sm text-gray-700 leading-snug break-words">${esc(t.text)}</span>
        <span class="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${badgeClass}">${badgeLabel}</span>
        <button class="del-btn" title="Delete">&#215;</button>`;

        li.querySelector('.check-btn').addEventListener('click', () => toggle(t.id, li));
        li.querySelector('.del-btn').addEventListener('click', () => remove(t.id, li));

        todoList.appendChild(li);
    });
}

// Add todo
function addTodo() {
    const text = todoInput.value.trim();
    if (!text) {
        todoInput.style.borderColor = '#f87171';
        todoInput.focus();
        setTimeout(() => todoInput.style.borderColor = '', 700);
        return;
    }
    todos.unshift({
        id: Date.now(),
        text,
        priority: prioritySel.value,
        done: false,
        created: Date.now()
    });
    save();
    render();
    todoInput.value = '';
    todoInput.focus();
}

// Toggle done
function toggle(id, li) {
    li.classList.add('popping');
    li.addEventListener('animationend', () => li.classList.remove('popping'), { once: true });
    const t = todos.find(x => x.id === id);
    if (t) t.done = !t.done;
    save();
    setTimeout(() => render(), 170);
}

// Remove todo
function remove(id, li) {
    li.classList.add('removing');
    setTimeout(() => {
        todos = todos.filter(x => x.id !== id);
        save();
        render();
    }, 210);
}

// Events
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        render();
    });
});

clearDoneBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.done);
    save();
    render();
});

// Init
render();
