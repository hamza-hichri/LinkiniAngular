import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../entities/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  readonly API_URL = "http://localhost:8083/post";


  constructor(private httpClient: HttpClient) { }
  getAllPublications(){
    return this.httpClient.get("http://localhost:8083/foruum/post/retrieve-all-publicatios")
  }
  Publicationaddc(publication:any){
    return this.httpClient.post("http://localhost:8083/foruum/post/add-post/1", publication)
  }
  deletePost( idp:any){
    return this.httpClient.delete("http://localhost:8083/foruum/post/remove-publication/"+idp)

  }
  PublicationupdatePost(publication:any){
    return this.httpClient.put("http://localhost:8083/foruum/post/modify-post",publication)

  }
  Stat(): Observable<Object[]>{
    return this.httpClient.get<Object[]>("http://localhost:8083/foruum/post/publication/vData/percentCountType")

  }
 
}
