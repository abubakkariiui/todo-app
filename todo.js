const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplalte = (todo) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-cetnter">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplalte(todo);
    addForm.reset();
  }
});

// Delete

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// Search

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
