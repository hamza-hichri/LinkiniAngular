import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voyage } from '../entities/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  readonly API_URL="http://localhost:8083/api/pidev"

  constructor(private httpClient:HttpClient) { }
  getAllTravel(){
    return this.httpClient.get("http://localhost:8083/api/pidev/ShowAllTravels")
  }
  AddTravel(travel:any){
    return this.httpClient.post("http://localhost:8083/api/pidev/AddTravel",travel);
  }
  EditTravel(travel:Voyage){
    return this.httpClient.put("http://localhost:8083/api/pidev/UpdateTravel",travel)
  }
  DeleteTravel(idTravel:any){
    return this.httpClient.delete("http://localhost:8083/api/pidev/DeleteTravel/"+idTravel)
  }
  

}
