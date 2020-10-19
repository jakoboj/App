let btnAdd = document.getElementById("btnAdd");
let item = document.getElementById("item");
let todolist = document.getElementById("todolist");

btnAdd.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    var remove = document.createElement('button');
    paragraph.classList.add('p-style');
    remove.classList.add('remove-button');
    paragraph.innerText = item.value;
    remove.innerText = "X";
    todolist.appendChild(paragraph);
    item.value = "";

    paragraph.addEventListener('click', () => {
        if (paragraph.style.textDecoration = "none") {
            paragraph.style.textDecoration = "line-through";
        } else {
            paragraph.style.textDecoration = "none";
        }
    })

    paragraph.addEventListener('dblclick', () => {
        todolist.removeChild(paragraph);
    })
})
