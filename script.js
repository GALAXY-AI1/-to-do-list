const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Tambah tugas
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm completeBtn">✔</button>
                <button class="btn btn-danger btn-sm deleteBtn">✖</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Tandai selesai atau hapus
taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('completeBtn')){
        const li = e.target.closest('li');
        li.classList.toggle('completed');
    }
    if(e.target.classList.contains('deleteBtn')){
        const li = e.target.closest('li');
        li.remove();
    }
});
