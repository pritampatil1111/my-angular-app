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

  onSubmit(form: NgForm)
  {
    console.log(form)
  }
}
