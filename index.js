// Arrays to keep track of each task's state

// const taskTitles = [];
// const taskComplete = [];
// const taskDesciption = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete


function newTask(title, description) {
  const task = {
    title: title,
    complete: false,
    desciption: description,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

  };
  return task;
}


// function newTask(title), description {
//   taskTitles.push(title);
//   taskComplete.push(false);
//   taskDesciption.push(description)
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1




const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask('make the laundary' , '😨');
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
