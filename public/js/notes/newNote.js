// newNote.js
let setNoteType = null;

const noteContentForm = document.getElementById('noteContentForm');
const noteFormWindow = document.getElementById('noteFormWindow');
const noteTypeForm = document.getElementById('noteTypeForm');
const noteReturnBtn = document.getElementById('returnTypeBtn');

const noteBoxId = document.getElementById('noteBoxId');
const noteType = document.getElementById('noteType');
const noteTitleValue = document.getElementById('noteTitle');
const noteColourValue = document.getElementById('noteColour');
const noteTextValue = document.getElementById('noteText');
const noteImageInput = document.getElementById('noteImageInput')
const noteImageURL = document.getElementById('imageURL');

export function setTextNote() {
    setNoteType = 'text';
    noteType.value = setNoteType;
    noteTextValue.classList.remove('collapsed');
    // noteTextValue.setAttribute('required');
};

export function setImageNote() {
    setNoteType = 'image';
    noteType.value = setNoteType;
    noteImageInput.classList.remove('collapsed');
    // noteImageURL.setAttribute('required');
};

export function resetNoteType() {
    setNoteType = null;
    noteTextValue.classList.add('collapsed');
    noteImageInput.classList.add('collapsed');
}