import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: {name:string; age:number; gender:string}){
    return this.http.post("http://localhost:3000/users",user)
  
  }



  constructor(public http: HttpClient) { }
}
