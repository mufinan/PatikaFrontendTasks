
const noteInput = document.getElementById("note-input");
const addNoteButton = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");
const searchInput = document.getElementById("search");
const colorOptions = document.querySelectorAll(".color");
let selectedColor = "";
let notes = [];

// Enable add button only if a color is selected and text is entered
noteInput.addEventListener("input", () => {
    addNoteButton.disabled = !noteInput.value.trim() || !selectedColor;
});

// Select color
colorOptions.forEach((color) => {
    color.addEventListener("click", () => {
        colorOptions.forEach((c) => c.classList.remove("selected"));
        color.classList.add("selected");
        selectedColor = color.getAttribute("data-color");
        addNoteButton.disabled = !noteInput.value.trim();
    });
});

// Add a new note
addNoteButton.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText && selectedColor) {
        notes.push({ text: noteText, color: selectedColor });
        noteInput.value = "";
        selectedColor = "";
        colorOptions.forEach((c) => c.classList.remove("selected"));
        addNoteButton.disabled = true;
        renderNotes();
    }
});

// Render notes
function renderNotes() {
    notesList.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.backgroundColor = note.color;
        noteDiv.textContent = note.text;
        notesList.appendChild(noteDiv);
    });
}

// Search notes
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredNotes = notes.filter((note) => note.text.toLowerCase().includes(query));
    notesList.innerHTML = "";
    filteredNotes.forEach((note) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.style.backgroundColor = note.color;
        noteDiv.textContent = note.text;
        notesList.appendChild(noteDiv);
    });
});
