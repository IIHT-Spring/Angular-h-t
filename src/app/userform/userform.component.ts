import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

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
    // this.userService.createUser(this.user);
    const observable = this.userService.createUser(this.user);
    observable.subscribe(response => {
      console.log(response);
      
    })


    // console.log( "hello mr / mrs " + this.user.name + " you are " + this.user.age + " years old ");
  }
  constructor( public userService :UserService) { }

  ngOnInit(): void {
  }

}
