window.addEventListener("load", () => {
  const createTaskButton = document.querySelector("#create-task");
  createTaskButton.addEventListener("click", handleAddnewTask);
  window.activeUsername = localStorage.getItem("active-session");
  popualteList();
});

const popualteList = () => {
  const existingTasks =
    JSON.parse(localStorage.getItem(`${activeUsername}:tasks`)) || [];
  existingTasks.forEach((element) => {
    const listId =
      element.status === "INCOMPLETE" ? "#incomplete-tasks" : "#complete-tasks";
    crateNewListItem(listId, element.msg);
  });
};

const crateNewListItem = (listId, msg) => {
  const taskList = document.querySelector(listId);
  var newLI = document.createElement("li");
  newLI.classList.add("list-group-item");
  newLI.appendChild(document.createTextNode(msg));
  taskList.appendChild(newLI);
};

const handleAddnewTask = (e) => {
  e.preventDefault();
  const taskValue = document.querySelector("#task-input").value;
  if (validateTask(taskValue)) {
    // localstorage stores everyting in string so to convert it to array we fif json.stringify
    const existingTasks =
      JSON.parse(localStorage.getItem(`${activeUsername}:tasks`)) || [];
    existingTasks.push({ msg: taskValue, status: "INCOMPLETE" });
    localStorage.setItem(
      `${activeUsername}:tasks`,
      JSON.stringify(existingTasks)
    );
    document.querySelector("#task-input").value = "";
    crateNewListItem("#incomplete-tasks", taskValue)
  } else {
    document.querySelector("#task-input").classList.add("is-invalid");
    document.querySelector(".invalid-feedback").innerHTML =
      "Please enter more than 10 characters";
  }
};

const validateTask = (value) => {
  if (value.length >= 10) {
    return true;
  }
  return false;
};
