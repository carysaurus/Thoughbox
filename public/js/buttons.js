// buttons.js

// --------------------------------------
// Create New Box Buttons
// --------------------------------------
const expandNewBoxBtn = document.getElementById('expandNewBoxBtn');
expandNewBoxBtn.addEventListener('click', expandNewBoxForm);

const collapseNewBoxBtn = document.getElementById('collapseNewBoxBtn');
collapseNewBoxBtn.addEventListener('click', collapseNewBoxForm);

const newBoxForm = document.getElementById('newBoxForm');

export function expandNewBoxForm() {
    newBoxForm.classList.remove('collapsed');
    expandNewBoxBtn.classList.add('hidden');
    collapseNewBoxBtn.classList.remove('hidden');
};



export function collapseNewBoxForm() {
    newBoxForm.classList.add('collapsed');
    expandNewBoxBtn.classList.remove('hidden');
    collapseNewBoxBtn.classList.add('hidden');
};



// --------------------------------------
// Box Menu Buttons
// --------------------------------------
// Open Menu for Individual Box
const boxMenuBtns = document.querySelectorAll('.boxMenuBtn')
boxMenuBtns.forEach(button => {
    button.addEventListener('click', () => {
        const boxId = button.dataset.id;
        toggleBoxMenuVis(boxId);
    })
})
window.toggleBoxMenuVis = function (id) {
    const boxItem = document.querySelector(`.box[data-id="${id}"]`);
    const boxMenu = boxItem.querySelector('.boxMenuBtns')
    boxMenu.classList.toggle('collapsed');
};

// Toggle Box Edit Form
const editBoxBtns = document.querySelectorAll('.editBoxBtn')
editBoxBtns.forEach(button => {
    button.addEventListener('click', () => {
        const boxId = button.dataset.id;
        toggleBoxMenuVis(boxId);
        toggleBoxEditForm(boxId);
    })
});

window.toggleBoxEditForm = function (id) {
    const boxItem = document.querySelector(`.box[data-id="${id}"]`);
    const boxEditForm = boxItem.querySelector('.editBoxForm')
    boxEditForm.classList.toggle('collapsed');

};

// Re-order Boxes -- to be updated once function is implemented
const moveBoxBtns = document.querySelectorAll('.moveBoxBtn')
moveBoxBtns.forEach(button => {
    button.addEventListener('click', () => {
        const boxId = button.dataset.id;
        console.log(`Move box ${boxId}`);
    })
});

// Archive Boxes -- to be updated once function is implemented
const archiveBoxBtns = document.querySelectorAll('.archiveBoxBtn')
archiveBoxBtns.forEach(button => {
    button.addEventListener('click', () => {
        const boxId = button.dataset.id;
        console.log(`Archive box ${boxId}`);
    })
});

// Re-order Boxes -- to be updated once function is implemented
const deleteBoxBtns = document.querySelectorAll('.deleteBoxBtn')
deleteBoxBtns.forEach(button => {
    button.addEventListener('click', () => {
        const boxId = button.dataset.id;
        console.log(`Delete box ${boxId}`);
    })
});