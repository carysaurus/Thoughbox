// public/js/boxes/boxes.js
import { checkOpenNoteMenu } from "../notes/notes.js";

export let openBoxMenu = null;

export function toggleBoxMenuVis(id, event) {
  event.stopPropagation();

  const boxMenu = document.querySelector(`.boxMenuBtns[data-box-id="${id}"]`);

  checkOpenNoteMenu();

  const isCollapsed = boxMenu.classList.contains("collapsed");

  if (openBoxMenu && openBoxMenu !== boxMenu) {
    openBoxMenu.classList.add("collapsed");
  }

  if (isCollapsed) {
    boxMenu.classList.remove("collapsed");
    openBoxMenu = boxMenu;
  } else {
    boxMenu.classList.add("collapsed");
    openBoxMenu = null;
  }
}

export function checkOpenBoxMenu() {
  if (openBoxMenu) {
    openBoxMenu.classList.add("collapsed");
    openBoxMenu = null;
  }
}

export function toggleBoxEditForm(id) {
  const boxEditForm = document.querySelector(
    `.editBoxForm[data-box-id="${id}"]`,
  );
  boxEditForm.classList.toggle("collapsed");
}
