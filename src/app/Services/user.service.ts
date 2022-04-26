import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient :HttpClient) { }
  adduser(user : any){
    
    return this.httpClient.post("http://localhost:8081/api/auth/signup",user)}
}
