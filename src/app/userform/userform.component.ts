import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name: '',
    age:10,
    gender: "Male"
  }
  save() {
    console.log( "hello mr / mrs " + this.user.name + " you are " + this.user.age + " years old ");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
