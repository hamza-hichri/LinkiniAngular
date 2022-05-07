import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedBackservice {
  // readonly API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  addFeedback(FeedBack: any){
    return this.httpClient.post("http://localhost:8083/AddFeedback", FeedBack)
  }
  updateFeedback(FeedBack: any){
    return this.httpClient.put("http://localhost:8083/UpdateFeedback/", FeedBack)
  }
  DeleteFeedbackbyId(FeedBack: any){
    return this.httpClient.delete("http://localhost:8083/Delete", FeedBack )
  }
  ShowAllFeedback(FeedBack: any){
    return this.httpClient.get("http://localhost:8083/ShowAll")
  }
}
