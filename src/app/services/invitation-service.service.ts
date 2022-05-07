import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitationServiceService {
//  readonly API_URL = 'http://localhost:8081/Invitation';
  constructor(private httpClient :HttpClient) { }

public getAllInvitation(){
    return this.httpClient.get("http://localhost:8081/Invitation/get-all-Invitation",{headers: new HttpHeaders().append("Authorization","Bearer "+localStorage.getItem('token'))})
}
addInvitation(invitation : any){
  return this.httpClient.post("http://localhost:8081/Invitation/addInvitation",invitation,{headers: new HttpHeaders().append("Authorization","Bearer "+localStorage.getItem('token'))})
}
editInvitation(invitation : any){
  return this.httpClient.put("http://localhost:8081/Invitation/modify-Invitation",invitation) 
}
deleteInvitation(id_invitation : any){
  return this.httpClient.delete("http://localhost:8081/Invitation/remove-Invitation/"+id_invitation)
}
getallusers(){
  return this.httpClient.get("http://localhost:8081/Invitation/alluser")
}

}

