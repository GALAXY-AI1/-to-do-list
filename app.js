const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Konfigurasi EJS dan static folder
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ganti sesuai password MySQL kamu
  database: 'todolist_app'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Tampilkan daftar todo
app.get('/', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.render('index', { todos: results });
  });
});

// Tambah todo
app.post('/add', (req, res) => {
  const task = req.body.task;
  db.query('INSERT INTO todos (task) VALUES (?)', [task], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Tandai selesai
app.post('/done/:id', (req, res) => {
  const id = req.params.id;
  db.query('UPDATE todos SET status = "done" WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Hapus todo
app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
