// public/js/main.js
import { expandNewBoxForm, collapseNewBoxForm } from "./buttons.js";

import { checkOpenBoxMenu } from "./boxes/boxes.js";
import {
  checkOpenNoteMenu,
  expandNoteBody,
  collapseNoteBody,
} from "./notes/notes.js";

document.addEventListener("DOMContentLoaded", () => {
  feather.replace();
});

document.addEventListener("click", () => {
  checkOpenBoxMenu();
  checkOpenNoteMenu();
});
