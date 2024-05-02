import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiurls = "http//:localhost:9999/create";
  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiurls);
  }

  createuser(user:User){
    return this.http.post(this.apiurls, user);
  }
}
