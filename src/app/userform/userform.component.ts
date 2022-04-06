import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  user = {
    name: ""
  }
  save() {
    console.log(this.user.name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
