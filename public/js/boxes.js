// boxes.js

// --------------------------------------
// Imports
// --------------------------------------
import {
    boxColours,
} from './colourConfig.js';
import {
    addNoteToBox
} from './notes.js';

// --------------------------------------
// Variables
// --------------------------------------
const boxTitleInput = document.getElementById('boxTitle');
const boxColourSelect = document.getElementById('boxColour');
const showBoxes = document.getElementById('showBoxes');
const addBox = document.getElementById('addBox');

// --------------------------------------
// Fetch all boxes
// --------------------------------------
export async function fetchBoxes() {
    try {
        const res = await fetch('/boxes');
        const boxes = await res.json();

        // Clear Existing Boxes
        showBoxes.innerHTML = '';

        // Display Boxes
        boxes.forEach(box => {
            const boxItem = createBoxItem(box);
            const editForm = createEditForm(box, boxItem);
            const notes = createNotesSpace(box, boxItem);
            showBoxes.appendChild(boxItem);
        });
        feather.replace();
    } catch (err) {
        console.error('Error fetching Boxes:', err);
    }
};

// --------------------------------------
// Create New Box
// --------------------------------------
addBox.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = boxTitleInput.value;
    const colour = boxColourSelect.value || 'light';
    const newBox = {
        title,
        colour
    };

    console.log(JSON.stringify(newBox));
    fetch('/boxes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBox)
        })
        .then(res => res.json())
        .then(box => {
            boxTitleInput.value = '';
            boxColourSelect.value = '';
            fetchBoxes();
        })
        .catch(err => console.error('Error creating new Box:', err));
});

// --------------------------------------
// Edit a Box
// --------------------------------------
window.startEditBox = function (id) {
    const boxItem = document.querySelector(`.box[data-id="${id}"]`);
    const editForm = boxItem.querySelector('.editBoxForm');
    editForm.style.display = 'flex';
};

window.stopEditBox = function (id) {
    const boxItem = document.querySelector(`.box[data-id="${id}"]`);
    if (!boxItem) return;

    const editForm = boxItem.querySelector('.editBoxForm');
    if (!editForm) return;


    editForm.style.display = 'none';
    console.log("Stopped editing Box.");
    editForm.reset();
};

window.editBox = function (id, title, colour) {
    const boxItem = document.querySelector(`.box[data-id="${id}"]`);
    const editForm = boxItem.querySelector('.editBoxForm');
    const editTitle = editForm.querySelector('input');
    const editColour = editForm.querySelector('select');

    const updatedBox = {};

    if (editTitle.value.trim() !== '') {
        updatedBox.title = editTitle.value.trim();
    };
    updatedBox.colour = editColour.value;

    fetch(`/boxes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBox)
        })
        .then(() => fetchBoxes())
        .catch(err => console.error('Error editing Box:', err));
};

// --------------------------------------
// Delete a Box
// --------------------------------------
window.deleteBox = function (id) {
    fetch(`/boxes/${id}`, {
            method: 'DELETE'
        })
        .then(() => fetchBoxes())
        .catch(err => console.error('Error deleting Box:', err));
};


// --------------------------------------
// Create Box Elements
// --------------------------------------
function createBoxItem(box) {
    const boxItem = document.createElement('div');
    boxItem.classList.add('box', box.colour);
    boxItem.dataset.id = box._id;

    const boxTitle = document.createElement('h2');
    boxTitle.textContent = box.title;
    boxItem.appendChild(boxTitle);

    // start editing button
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBoxBtn');
    const editIcon = document.createElement('i');
    editIcon.setAttribute('data-feather', 'edit');
    editBtn.appendChild(editIcon);
    boxItem.appendChild(editBtn);

    editBtn.onclick = function () {
        startEditBox(box._id);
    };

    return boxItem;
};

function createEditForm(box, boxItem) {
    const editForm = document.createElement('form');
    editForm.classList.add('editBoxForm');

    const editTitle = document.createElement('input');
    editTitle.setAttribute('type', 'text');
    editForm.appendChild(editTitle);
    editTitle.value = box.title;

    const editColour = document.createElement('select');
    boxColours.forEach(colour => {
        const option = document.createElement('option');
        option.value = colour;
        option.textContent = colour;
        editColour.appendChild(option);
    });
    editForm.appendChild(editColour);
    editColour.value = box.colour;

    const editBtnsAll = document.createElement('div');
    editBtnsAll.classList.add('editBtns');

    // save edit button
    const saveEditFormBtn = document.createElement('button');
    saveEditFormBtn.classList.add('saveEditFormBtn');
    const saveEditFormIcon = document.createElement('i');
    saveEditFormIcon.setAttribute('data-feather', 'check-square');
    saveEditFormBtn.appendChild(saveEditFormIcon);
    editBtnsAll.appendChild(saveEditFormBtn);

    saveEditFormBtn.onclick = function () {
        editBox(box._id);
    };

    // cancel edit button
    const stopEditFormBtn = document.createElement('button');
    stopEditFormBtn.classList.add('stopEditFormBtn');
    const stopEditFormIcon = document.createElement('i');
    stopEditFormIcon.setAttribute('data-feather', 'x-square');
    stopEditFormBtn.appendChild(stopEditFormIcon);
    editBtnsAll.appendChild(stopEditFormBtn);

    stopEditFormBtn.onclick = function () {
        stopEditBox(box._id);
    };

    // delete box button
    const deleteFormBtn = document.createElement('button');
    deleteFormBtn.classList.add('deleteFormBtn');
    const deleteFormIcon = document.createElement('i');
    deleteFormIcon.setAttribute('data-feather', 'trash-2');
    deleteFormBtn.appendChild(deleteFormIcon);
    editBtnsAll.appendChild(deleteFormBtn);

    deleteFormBtn.onclick = function () {
        deleteBox(box._id);
    };

    editForm.appendChild(editBtnsAll);
    boxItem.appendChild(editForm);

    return editForm;

}

function createNotesSpace(box, boxItem) {
    const boxNotes = document.createElement('div');
    boxNotes.classList.add('boxNotes');

    const newNoteBtn = document.createElement('button');
    newNoteBtn.classList.add('newNoteBtn');
    const plusIcon = document.createElement('i');
    plusIcon.setAttribute('data-feather', 'plus');
    const noteIcon = document.createElement('i');
    noteIcon.setAttribute('data-feather', 'message-square');

    newNoteBtn.append(plusIcon, noteIcon);
    boxItem.append(newNoteBtn, boxNotes);

    newNoteBtn.onclick = function () {
        addNoteToBox(box._id, boxNotes);
    };

    return boxNotes;
};


// --------------------------------------
// Add New Note to Box
// --------------------------------------
window.addNoteToBox = function (id) {

};