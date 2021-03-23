import { nanoid } from 'nanoid';

function Task(taskName, taskID, taskPriority, taskDue, taskNotes, taskProjectID) {
    this.taskName = taskName;
    this.taskID = taskID;
    this.taskPriority = taskPriority;
    this.taskDue = taskDue;
    this.taskNotes = taskNotes;
    this.taskProjectID = taskProjectID;
  }

const addTaskToList = {
    taskList: [
            {
                "taskName": "1",
                "taskID": "Ebl6XLPlKnl3zG07lMj14",
                "taskPriority": "Low",
                "taskDue": "2022-01-01",
                "taskNotes": "",
                "taskProjectID": "b8d991cd-839c-4138-8b87-164caa3dbddf"
            },
            {
                "taskName": "2",
                "taskID": "lrT9coUi2ji5f1-bzdPHB",
                "taskPriority": "Medium",
                "taskDue": "2022-01-02",
                "taskNotes": "",
                "taskProjectID": "b8d991cd-839c-4138-8b87-164caa3dbddf"
            },
            {
                "taskName": "3",
                "taskID": "C1mjjETF1giwRVClMWo6Z",
                "taskPriority": "High",
                "taskDue": "2022-01-03",
                "taskNotes": "",
                "taskProjectID": "b8d991cd-839c-4138-8b87-164caa3dbddf"
            },
            {
                "taskName": "4",
                "taskID": "mxGxxqXrplLs1iFF2624-",
                "taskPriority": "Low",
                "taskDue": "2022-02-04",
                "taskNotes": "",
                "taskProjectID": "2e9a220e-e8fd-4784-841f-b01d4fb7ed9c"
            },
            {
                "taskName": "5",
                "taskID": "Def7UCU43cDqUpoIaRH42",
                "taskPriority": "Medium",
                "taskDue": "2022-02-05",
                "taskNotes": "",
                "taskProjectID": "2e9a220e-e8fd-4784-841f-b01d4fb7ed9c"
            },
            {
                "taskName": "6",
                "taskID": "0UJ7thsq4P5Fs65wkZesX",
                "taskPriority": "High",
                "taskDue": "2022-02-06",
                "taskNotes": "",
                "taskProjectID": "2e9a220e-e8fd-4784-841f-b01d4fb7ed9c"
            },
            {
                "taskName": "7",
                "taskID": "aFdBEuS4q3ECvKAcYtoHm",
                "taskPriority": "Low",
                "taskDue": "2022-03-07",
                "taskNotes": "",
                "taskProjectID": "f8c1426c-2e1b-470d-9466-a95d964f5d07"
            },
            {
                "taskName": "8",
                "taskID": "sbY0fgcGRyjQq3hIx0CVu",
                "taskPriority": "Medium",
                "taskDue": "2022-03-08",
                "taskNotes": "",
                "taskProjectID": "f8c1426c-2e1b-470d-9466-a95d964f5d07"
            },
            {
                "taskName": "9",
                "taskID": "zlU0YMeCas6s1yRdxeXid",
                "taskPriority": "High",
                "taskDue": "2022-03-09",
                "taskNotes": "",
                "taskProjectID": "f8c1426c-2e1b-470d-9466-a95d964f5d07"
            }
    ],

    
    getValue: function() {
        const taskName = document.querySelector("#taskInputField").value;
        const taskID = nanoid();
        const taskPriority = document.querySelector("#taskPrioritySelector").value;
        const taskDue = document.querySelector("#taskCalendarSelector").value;
        const taskNotes = document.querySelector("#taskNotesBox").value;
        const taskProjectID = document.querySelector("#taskProjectSelector").value;
        const addTask = new Task(taskName, taskID, taskPriority, taskDue, taskNotes, taskProjectID);
        this.taskList.push(addTask);
        document.querySelector("#taskInputField").value = "";
        document.querySelector("#taskPrioritySelector").value = "";
        if(taskPrioritySelector.classList.contains('flex')) {
            taskPrioritySelector.classList.toggle('flex');
            } 
        document.querySelector("#taskCalendarSelector").value = "";
        document.querySelector("#taskNotesBox").value = "";
        if(taskNotesInput.classList.contains('flex')) {
            taskNotesInput.classList.toggle("flex");
            } 
        document.querySelector("#taskProjectSelector").value = "";
        if(taskProjectSelector.classList.contains('flex')) {
            taskProjectSelector.classList.toggle("flex");
            } 
        console.log(this.taskList)
        },

    deleteObject: function(taskID) {
        this.taskList = this.taskList.filter(object => object.taskID !== taskID);
        },

    changeTaskName: function(taskID, newTaskNameText) {
        const index = this.taskList.findIndex((el) => el.taskID === taskID);
        this.taskList[index].taskName = newTaskNameText;
        },

    changeTaskPriority: function(taskID, newValue) {
        const index = this.taskList.findIndex((el) => el.taskID === taskID);
        this.taskList[index].taskPriority = newValue;
        },
    
    changeTaskDate: function (taskID, newValue) {
        const index = this.taskList.findIndex((el) => el.taskID === taskID);
        this.taskList[index].taskDue = newValue;
        },

    changeTaskNotes: function (taskID, newValue) {
        const index = this.taskList.findIndex((el) => el.taskID === taskID);
        this.taskList[index].taskNotes = newValue;
        },

    changeTaskProject: function (taskID, newValue) {
        const index = this.taskList.findIndex((el) => el.taskID === taskID);
        this.taskList[index].taskProjectID = newValue;
        },

    deleteAllInProject: function(axedTaskProjectID) {
        this.taskList = this.taskList.filter(object => object.taskProjectID !== axedTaskProjectID);
        console.log(this.taskList)
        },
    
    sortbyProject: function(focusOnProjectID) {
        let newProjectTaskList = this.taskList.filter(object => object.taskProjectID == focusOnProjectID);
        console.log(newProjectTaskList);
        return newProjectTaskList;
        },

    createTaskPrefill: function() {
        console.log("Prefill:" + this.taskList)
        },

    // sortByAllTime: function() {
    //     const sortedByAllTime = this.taskList.sort((a, b) => b.taskDue - a.taskDue)
    //     console.log(sortedByAllTime)
    //     },

    // sortByToday: function() {},

    // sortByThisWeek: function() {},

   };

  export default addTaskToList;