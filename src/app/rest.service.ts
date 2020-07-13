import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../Users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  public UserId;


  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/Users/"

  getUsers()
  {
      return this.http.get<Users[]>(this.url);
  }
  addUser(Users){
    return this.http.post<Users[]>(this.url,Users)
  }
  delUser(id : number){
    return this.http.delete<Users[]>(this.url+id)
  }
  setId(id) {
    this.UserId = id;

  }

  getId() {
    return this.UserId;
  }
}
