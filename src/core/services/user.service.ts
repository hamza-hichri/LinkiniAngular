import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    httpOptions = {
      headers: new HttpHeaders({
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin':'*',
     })
   }
    url=environment.url+"user/";
    constructor(private http: HttpClient) { }
    currentUser:User= new User();
    status:boolean=false;
    MODUser(User:User){
      this.currentUser=User;
    }
    UpdateUser(User:User){
      this.currentUser=User;
      this.status=true;
    }
       getListUserService(){
      return this.http.get<User[]>(this.url+"retrieve-all-users")
      }
  

     
  
   
      getById(id:any){
        return this.http.get<User>(this.url+"retrive-user/"+id)
      }
  
     
      deleteUserService(id:number){
        return this.http.delete(this.url+"remove-user/"+id)
      }
     
    // Error handling 
    handleError(error: any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }

   updateUserService(user: User){
    return this.http.put(this.url+"modify-user/",user)
  }

  verifyUser(email: string)
  {
    return this.http.get<Boolean>(this.url+"email-exists/"+email)
  }
     
  }
  
