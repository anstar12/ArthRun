import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {FormControl, FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {
  userForm = new FormGroup({
    gender: new FormControl(),
 }); 
 public ans1: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    if(this.userForm.get('gender').value=='female'){
      this.ans1 = true;
    }
    else{
      alert("sorry wrong ans");
    }
 }
}
