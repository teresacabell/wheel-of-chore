var choreIdCounter = 0;

var formEl = document.querySelector("#chore-form");
var pageContentEl = document.querySelector("#page-content");

var chores = [];

var choreFormHandler = function (event) {
    event.preventDefault();
    var choreNameInput = document.querySelector("input[name='chore-name']").value;

     // check if inputs are empty (validate)
  if (!choreNameInput) {
    alert("You need to create a chore!");
    return false;
  }

   // reset form fields for next chore to be entered
   document.querySelector("input[name='chore-name']").value = "";

  var isEdit = formEl.hasAttribute("data-chore-id");

  if (isEdit) {
    var choreId = formEl.getAttribute("data-chore-id");
    completeEditChore(choreNameInput, choreId);
  } else {
    var choreDataObj = {
      name: choreNameInput,
      status: "to do",
    };

    createChoreEl(choreDataObj);
  }
};

// Edit chores
var completeEditChore = function (choreName, choreId) {
    // find chore list item with choreId value
    var choreSelected = document.querySelector(
      ".chore-item[data-chore-id='" + choreId + "']"
    );
  
    // set new values
    choreSelected.querySelector("h3.chore-name").textContent = choreName;
    
    // loop through chore array and chore object with new content
    for (var i = 0; i < chores.length; i++) {
      if (chores[i].id === parseInt(choreId)) {
        chores[i].name = choreName;
      }
    }
  
    alert("Chore Updated!");
  
    // remove data attribute from form
    formEl.removeAttribute("data-chore-id");
    // update formEl button to go back to saying "Add Chore" instead of "Edit Chore"
    formEl.querySelector("#save-chore").textContent = "Add Chore";
    // save chores to localStorage
    saveChores();
  };

  var choreButtonHandler = function (event) {
    // get target element from event
    var targetEl = event.target;
  
    if (targetEl.matches(".edit-btn")) {
      console.log("edit", targetEl);
      var choreId = targetEl.getAttribute("data-chore-id");
      editChore(choreId);
    } else if (targetEl.matches(".delete-btn")) {
      console.log("delete", targetEl);
      var choreId = targetEl.getAttribute("data-chore-id");
      deleteChore(choreId);
    }
  };

  var editChore = function (choreId) {
    console.log(choreId);
  
    // get chore list item element
    var choreSelected = document.querySelector(
      ".chore-item[data-chore-id='" + choreId + "']"
    );
  
    // get content from chore name
    var choreName = choreSelected.querySelector("h3.chore-name").textContent;
    console.log(choreName);
  
    // write values of choreName to form to be edited
    document.querySelector("input[name='chore-name']").value = choreName;
  
    // set data attribute to the form with a value of the chore's id so it knows which one is being edited
    formEl.setAttribute("data-chore-id", choreId);
    // update form's button to reflect editing a chore rather than creating a new one
    formEl.querySelector("#save-chore").textContent = "Save Chore";
  };

  var deleteChore = function (choreId) {
    console.log(choreId);
    // find chore list element with choreId value and remove it
    var choreSelected = document.querySelector(
      ".chore-item[data-chore-id='" + choreId + "']"
    );
    choreSelected.remove();
  
    // create new array to hold updated list of chores
    var updatedChoreArr = [];
  
    // loop through current chores
    for (var i = 0; i < chores.length; i++) {
      // if chores[i].id doesn't match the value of choreId, let's keep that chore and push it into the new array
      if (chores[i].id !== parseInt(choreId)) {
        updatedChoreArr.push(chores[i]);
      }
    }
  
    // reassign chores array to be the same as updatedChoreArr
    chores = updatedChoreArr;
    saveChores();
  };

  var saveChores = function() {
    localStorage.setItem("chores", JSON.stringify(chores));
  };

  var loadChores = function() {
    var savedChores = localStorage.getItem("chores");
    // if there are no chores, set chores to an empty array and return out of the function
    if (!savedChores) {
      return false;
    }
    console.log("Saved chores found!");
    // else, load up saved chores
  
    // parse into array of objects
    savedChores = JSON.parse(savedChores);
  
    // loop through savedChores array
    for (var i = 0; i < savedChores.length; i++) {
      // pass each chores object into the `createChoreEl()` function
      createChoreEl(savedChores[i]);
    }
  };

  // Create a new chore
formEl.addEventListener("submit", choreFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", choreButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", choreStatusChangeHandler);

loadChores();