import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface UserResponse {
  data: User,
  support: {
      url: string;
      text: string;
  }
}


export interface ReqResResponse {
  page:number;
  per_page: number;
  total: number;
  data: User[]
}

@Injectable({
  providedIn: 'root'
})
export class ReqResService {
  private readonly url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getUserList(page:number = 2): Observable<ReqResResponse> {
    return this.http.get<ReqResResponse>(`${this.url}users?page=${page}`);
  }

  public getUser(userId: number):Observable<UserResponse>{
    return this.http.get<UserResponse>(`${this.url}users/${userId}`);
  }
}
