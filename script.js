const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Tambah tugas baru
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="btn btn-success btn-sm completeBtn" title="Selesai"><i class="bi bi-check-lg"></i></button>
                <button class="btn btn-danger btn-sm deleteBtn" title="Hapus"><i class="bi bi-trash"></i></button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Tandai selesai atau hapus
taskList.addEventListener('click', (e) => {
    if(e.target.closest('.completeBtn')){
        const li = e.target.closest('li');
        li.classList.toggle('completed');
    }
    if(e.target.closest('.deleteBtn')){
        const li = e.target.closest('li');
        li.remove();
    }
});

// Enter key untuk tambah tugas
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        addBtn.click();
    }
});
