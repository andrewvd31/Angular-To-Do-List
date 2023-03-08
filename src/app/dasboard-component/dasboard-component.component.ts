import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/task';
import { CrudServiceService } from '../Services/crud-service.service';

@Component({
  selector: 'app-dasboard-component',
  templateUrl: './dasboard-component.component.html',
  styleUrls: ['./dasboard-component.component.css']
})
export class DasboardComponentComponent implements OnInit{
  taskObj: Task = new Task()
  taskArr: Task[] = []
  addTaskValue: string = ''
  editTaskValue: string = ''
  constructor(private crudService: CrudServiceService){
  }
  ngOnInit():void{
    this.editTaskValue = ''
    this.addTaskValue = ''
    this.taskObj = new Task()
    this.taskArr = []
    this.getAllTask()
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res=>{
      this.taskArr = res;
    },err=>{
      alert("Unable to get the list of tasks")
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res=>{
    this.ngOnInit();
  },err=>{
    alert(err)
  })
}
  editTask(){
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert("Failed to update task")
    })
  }
  deleteTask(task: Task){
    this.crudService.deleteTask(task).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert("Failed to delete task")
    })
  }
  call(task: Task){
    this.taskObj = task;
    this.editTaskValue = task.task_name;
  }
}
