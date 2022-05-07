import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationserviceService {
  // readonly API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  addReclamation(Reclamation: any, user1_id: any , user2_id: any){
    return this.httpClient.post("http://localhost:8083/AddReclamation/"+user1_id+'/'+user2_id, Reclamation)
  }
  updateReclamation(Reclamation: any){
    return this.httpClient.put("http://localhost:8083/UpdateReclamation/", Reclamation)
  }
  deleteReclamation(idr: any){
    return this.httpClient.delete("http://localhost:8083/DeleteRec/"+idr)
  }
  ShowAllReclamation(Reclamation: any){
    return this.httpClient.get("http://localhost:8083/ShowAllRecl")
  }
}
