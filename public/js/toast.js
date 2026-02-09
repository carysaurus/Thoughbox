// public/js/config/toast.js
const toastDiv = document.getElementById("toast");
const toast = document.getElementById("toastText");

const messages = {
  login: {
    success: "Welcome back, your mind-space awaits!",
    fail: "Oops! That username or password doesn’t match our records.",
  },
  register: {
    success: "Hello, new curator of ideas! Your Thoughtbox journey begins.",
    fail: "Hmm… that username already exists in the Thoughtbox universe.",
  },
  logout: "Farewell! Your Thoughts await your return.",
  box: {
    created: "A new Box has been constructed!",
    archived: "Box has been tucked safely into the Archive.",
    unarchived: "Box has rematerialized from the Archive.",
    updated: "Box has been successfully reconstructed.",
    deleted: "Box deconstructed and responsibly recycled.",
  },
  note: {
    created: "Behold! A new Thought is created!",
    archived: "Thought has been Archived for later reflection.",
    unarchived: "Thought rediscovered from the Archive.",
    updated: "Thought has blossomed into something brighter.",
    deleted: "Thought has vanished into the void, leaving only echoes.",
  },
};

export function updateToast(message) {
  switch (message) {
    case "loginSuccess":
      toast.innerText = messages.login.success;
      break;
    case "loginFail":
      toast.innerText = messages.login.fail;
      break;
    case "logout":
      toast.innerText = messages.logout;
      break;
    case "registerSuccess":
      toast.innerText = messages.register.success;
      break;
    case "registerFail":
      toast.innerText = messages.register.fail;
      break;
    case "logout":
      toast.innerText = messages.logout;
      break;
    case "boxCreated":
      toast.innerText = messages.box.created;
      break;
    case "boxArchived":
      toast.innerText = messages.box.archived;
      break;
    case "boxUnarchived":
      toast.innerText = messages.box.unarchived;
      break;
    case "boxUpdated":
      toast.innerText = messages.box.updated;
      break;
    case "boxDeleted":
      toast.innerText = messages.box.deleted;
      break;
    case "noteCreated":
      toast.innerText = messages.note.created;
      break;
    case "noteArchived":
      toast.innerText = messages.note.archived;
      break;
    case "noteUnarchived":
      toast.innerText = messages.note.unarchived;
      break;
    case "noteUpdated":
      toast.innerText = messages.note.updated;
      break;
    case "noteDeleted":
      toast.innerText = messages.note.deleted;
      break;
  }
  showToast();
}

function showToast() {
  toastDiv.classList.add("toastAnim");
}
