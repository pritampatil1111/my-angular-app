import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todolist',
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{

  Taskarray = [{taskName : 'brushteeth', isCompleted : false}];

  constructor () { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.Taskarray.push({
        taskName: form.controls['task'].value,
        isCompleted: false
      });
      form.reset();
    }
  }


  onDelete(index:number){
    console.log(index);

    this.Taskarray.splice(index, 1);
  }
  
}
