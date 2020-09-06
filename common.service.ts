import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url="http://localhost:3000/resto";
  regUrl = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }
   
  getRestoList():Observable<any>{
   return this.http.get<any>(this.url)
  }
  
  addResto(data){

    return this.http.post<any>(this.url,data)

  }
  deleteResto(id){
    return this.http.delete(`${this.url}/${id}`)
  }
//get all data
  getCurrentData(id){

    return this.http.get(`${this.url}/${id}`)

  }
  updateData(id,data){
    return this.http.put(`${this.url}/${id}`,data)

  }
  createUser(data){

    return this.http.post(this.regUrl,data);
  }
}
