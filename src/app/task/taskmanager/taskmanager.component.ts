import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { currentId } from 'async_hooks';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {
  currentTask = "no Plans"
  completedtasks = []

  @ViewChild('inputTask') itt:ElementRef

  tasks = [
          "Plan the weekend!",
          "Plan the weekday break!"
  ]
  addTask =function(){
    console.log(this.currentTask)
    this.tasks.push(this.currentTask)
    this.currentTask =""
    this.itt.nativeElement.focus();
  }
  changeTaskStatus = function(cou){
    console.log("changing tasks:" +cou)
    this.completedtasks.push(this.tasks[cou])
    this.tasks.splice(cou,1)
  }

  undoneTask = function(uncou){
    this.tasks.push(this.completedtasks[uncou])
    this.completedtasks.splice(uncou,1)
  }

  constructor() { }

  ngOnInit() {
  }

}
