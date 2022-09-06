import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  user = {
    name: '',
    age: 0,
    gender: 'Male',
  };
  users = [];
  deleteRow(user, index) {
    const observable = this.userService.deleteUser(user);
    observable.subscribe((response: any) => {
      // sucess handler
      console.log(response);
      this.users.splice(index, 1);
    });
  }
  save() {
    // this.userService.createUser(this.user);
    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        // sucess handler
        console.log(response);
        this.users.push(response);
      },
      function (error) {
        alert('Something went wrong please try again!');
      }
    );

    // console.log( "hello mr / mrs " + this.user.name + " you are " + this.user.age + " years old ");
  }
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
