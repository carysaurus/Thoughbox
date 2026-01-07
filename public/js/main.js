// main.js

import {
    boxColours,
    noteColours,
    fetchColourConfig
} from './colourConfig.js';

import {
    fetchBoxes
} from './boxes.js';


import {
    addNoteToBox
} from './notes.js';

// on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {

    fetchColourConfig().then(() => {
        fetchBoxes();
    });
    feather.replace();
});