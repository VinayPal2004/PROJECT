const inputbox = document.getElementById("textbox");
const button = document.getElementById("add");
const listcontainer = document.querySelector(".record");

button.addEventListener("click", () => {
  const task = inputbox.value.trim();

  if (task === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");

    // create custom checkbox span
    let checkbox = document.createElement("span");
    checkbox.classList.add("checkbox");

    // add text node
    let taskText = document.createElement("span");
    taskText.textContent = task;

    // delete button
    let delBtn = document.createElement("span");
    delBtn.textContent = "✖";
    delBtn.classList.add("delete-btn");

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(delBtn);
    listcontainer.appendChild(li);

    inputbox.value = "";

    // mark completed
    checkbox.addEventListener("click", () => {
      li.classList.toggle("checked");
    });

    // delete task
    delBtn.addEventListener("click", () => {
      li.remove();
    });
  }
});
