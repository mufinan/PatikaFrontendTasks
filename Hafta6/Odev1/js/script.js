
document.getElementById("add-btn").addEventListener("click", addTask);
document.getElementById("todo-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task === "") {
        showToast("error-toast");
        return;
    }

    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    listItem.appendChild(deleteButton);
    document.getElementById("todo-list").appendChild(listItem);
    input.value = "";
    showToast("success-toast");
}

function showToast(toastId) {
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
}
